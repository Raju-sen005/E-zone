import React from 'react';

const AboutPromotion = () => {
  return (
    <div className="promotional-area mt-100">
      <div className="row g-0 justify-content-center">

        {/* Item 1 */}
        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="300">
          <div className="promotional-item overlay-blue">
            <img src="assets/img/about/p1.jpg" alt="Promotion 1" />
            <div className="promotional-absolute">
              <div className="promotional-content text-center">
                <h2 className="promo-title">
                  Serve our customers and always deliver the customer service
                </h2>
                <p className="promo-subtitle">
                  We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="700">
          <div className="promotional-item overlay-black">
            <img src="assets/img/about/p2.jpg" alt="Promotion 2" />
            <div className="promotional-absolute">
              <div className="promotional-content text-center">
                <h2 className="promo-title">
                  To be the world’s most leader in automotive business solutions.
                </h2>
                <p className="promo-subtitle">
                  We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="1000">
          <div className="promotional-item overlay-yellow">
            <img src="assets/img/about/p3.jpg" alt="Promotion 3" />
            <div className="promotional-absolute">
              <div className="promotional-content text-center">
                <h2 className="promo-title">
                  We value the service we provide and our loyal returning customers
                </h2>
                <p className="promo-subtitle">
                  We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPromotion;
