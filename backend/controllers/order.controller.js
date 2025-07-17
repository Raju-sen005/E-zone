const axios = require('axios');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const transactionModel = require('../models/transaction.model');

const MERCHANT_KEY = "96434309-7796-489d-8924-ab56988a6076"
const MERCHANT_ID = "PGTESTPAYUAT86"

// const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"
// const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/status"

const MERCHANT_BASE_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"
const MERCHANT_STATUS_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status"

const redirectUrl = `${process.env.BACKEND}/order/status`

const successUrl = `${process.env.FRONTEND}`
const failureUrl = `${process.env.FRONTEND}/payment-failure`

exports.createOrder = async (req, res) => {
    const { name, mobileNumber, amount } = req.body;
    const userId = req.user.id
    const orderId = uuidv4()

    await transactionModel.create({
        user_id: userId,
        merchantTransactionId: orderId,
        amount,
        status: 'PENDING'
    });

    //payment
    const paymentPayload = {
        merchantId: MERCHANT_ID,
        merchantUserId: name,
        mobileNumber: mobileNumber,
        amount: amount * 100,
        merchantTransactionId: orderId,
        redirectUrl: `${redirectUrl}/?id=${orderId}`,
        redirectMode: 'POST',
        paymentInstrument: {
            type: 'PAY_PAGE'
        }
    }

    const payload = Buffer.from(JSON.stringify(paymentPayload)).toString('base64')
    const keyIndex = 1
    const string = payload + '/pg/v1/pay' + MERCHANT_KEY
    const sha256 = crypto.createHash('sha256').update(string).digest('hex')
    const checksum = sha256 + '###' + keyIndex

    const option = {
        method: 'POST',
        url: MERCHANT_BASE_URL,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': checksum
        },
        data: {
            request: payload
        }
    }
    try {

        const response = await axios.request(option);

        console.log(response.data.data.instrumentResponse.redirectInfo.url)
        res.status(200).json({ success: true, message: "OK", url: response.data.data.instrumentResponse.redirectInfo.url })
    } catch (error) {

        await transactionModel.findOneAndUpdate(
            { merchantTransactionId: orderId },
            { status: 'FAILED' }
        );
        console.log("error in payment", error)
        res.status(500).json({ error: 'Failed to initiate payment' })
    }
}

exports.getPaymentStatus = async (req, res) => {
    const merchantTransactionId = req.query.id;

    const keyIndex = 1
    const string = `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}` + MERCHANT_KEY
    const sha256 = crypto.createHash('sha256').update(string).digest('hex')
    const checksum = sha256 + '###' + keyIndex

    const option = {
        method: 'GET',
        url: `${MERCHANT_STATUS_URL}/${MERCHANT_ID}/${merchantTransactionId}`,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': checksum,
            'X-MERCHANT-ID': MERCHANT_ID
        },
    }

    try {
        const response = await axios.request(option);


        if (response.data.success === true) {
            const transaction = await transactionModel.findOne({ merchantTransactionId });


            if (!transaction) {
                return res.redirect(failureUrl); // No such transaction
            }

            const userId = transaction.user_id;


            // 🧹 Clear cart items for the user
            await Cart.findOneAndUpdate(
                { user_id: userId },
                { $set: { items: [] } }
            );

            return res.redirect(successUrl);
        } else {
            return res.redirect(failureUrl);
        }
    } catch (error) {
        console.error("Payment Status Error:", error.message);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}