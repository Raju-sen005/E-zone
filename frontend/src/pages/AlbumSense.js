import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Breadcrumb from './Breadcrumb'
import SingleBanner from '../components/SingleBanner'
import ProductPage from './ProductPage'
import Footer from '../components/Footer'
import ScrollUpButton from '../components/ScrollUpButton'
import DrawerCart from '../components/DrawerCart'
import DrawerMenu from '../components/DrawerMenu'
import ProductQuickView from '../components/ProductQuickView'

const AlbumSense = () => {
  return (
    <>
      <div className="body-wrapper">
        <AnnouncementBar />
        <Header />
        <Breadcrumb />
        <SingleBanner />
        <main id="MainContent" className="content-for-layout">
          <ProductPage />
          {/* <!-- trusted badge start --> */}
          <div className="trusted-section mt-100 overflow-hidden">
            <div className="trusted-section-inner">
              <div className="container">
                <div className="row justify-content-center trusted-row">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="trusted-badge rounded p-0">
                      <div className="trusted-icon">
                        <img className="icon-trusted" src="assets/img/trusted/1.png" alt="icon-1" />
                      </div>
                      <div className="trusted-content">
                        <h2 className="heading_18 trusted-heading">Free Shipping & Return</h2>
                        <p className="text_16 trusted-subheading trusted-subheading-2">On all order over
                          $99.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="trusted-badge rounded p-0">
                      <div className="trusted-icon">
                        <img className="icon-trusted" src="assets/img/trusted/2.png" alt="icon-2" />
                      </div>
                      <div className="trusted-content">
                        <h2 className="heading_18 trusted-heading">Customer Support 24/7</h2>
                        <p className="text_16 trusted-subheading trusted-subheading-2">Instant access to
                          support</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="trusted-badge rounded p-0">
                      <div className="trusted-icon">
                        <img className="icon-trusted" src="assets/img/trusted/3.png" alt="icon-3" />
                      </div>
                      <div className="trusted-content">
                        <h2 className="heading_18 trusted-heading">100% Secure Payment</h2>
                        <p className="text_16 trusted-subheading trusted-subheading-2">We ensure secure
                          payment!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- trusted badge end --> */}

          {/* <!-- product tab start --> */}
          <div className="product-tab-section mt-100" data-aos="fade-up" data-aos-duration="700">
            <div className="container">
              <div className="tab-list product-tab-list">
                <nav className="nav product-tab-nav">
                  <a className="product-tab-link tab-link active" href="#pdescription"
                    data-bs-toggle="tab">Description</a>
                  <a className="product-tab-link tab-link" href="#pshipping" data-bs-toggle="tab">Shipping &
                    Returns</a>
                  <a className="product-tab-link tab-link" href="#pstyle" data-bs-toggle="tab">Style with</a>
                  <a className="product-tab-link tab-link" href="#preview" data-bs-toggle="tab">Reviews</a>
                </nav>
              </div>
              <div className="tab-content product-tab-content">
                <div id="pdescription" className="tab-pane fade show active">
                  <div className="row">
                    <div className="col-lg-7 col-md-12 col-12">
                      <div className="desc-content">
                        <h4 className="heading_34 mb-3">
                          Album Sense Features</h4>


                        <div>
                          <h4 className="heading_18 mb-3">
                            Unique Design with Automation</h4>

                          <p className="text_16 mb-4">You are able create your own design using our
                            Creative Design facility that too with Automation, This unique feature
                            is introduced for the first time in the world.
                          </p>

                          <p className="text_16 mb-4">Effortlessly you can apply your own design style
                            using artificially intelligent automation tools that make your designing
                            more professional and beautiful that suits to your Style.
                          </p>

                          <p className="text_16 mb-4">PHOTOSENSE helps you save in both format PSD & JPG
                          </p>

                          <p className="text_16 mb-4">
                            Let your inventiveness fly with us. Create Quality Design effortlessly.
                          </p>
                        </div>

                        <div>
                          <h4 className="heading_18 mb-3">
                            Automatic Design / Layout Creation</h4>

                          <p className="text_16 mb-4">Our AI powered AUTOMATION TOOL is one of its kind in
                            the world, it allows you to create creative design using single-click
                            ‘Auto Page’. You can create automatic layouts using professional
                            templates. Using magical ‘Auto Page’ you can keep changing the design as
                            many times as you want. You get multi-layered editable page design. You
                            can as well decorate your page with lots of available Photo-Boxes,
                            Brushes, Masks, Light Effects etc. Automation introduced in most of our
                            tools that makes your work easy and quick.
                          </p>

                        </div>

                        <div>
                          <h4 className="heading_18 mb-3">
                            Non destructive photo-correction</h4>

                          <p className="text_16 mb-4">PhotoSense gives incredibly professional and
                            non-destructive Image correction using Level, Gary and White Balance,
                            Under and Over Adjustment, Black & White , Under and Over Adjustment,
                            Color Contrast, Auto Saturation and Shadow Highlight Adjustment and more
                            using Artificial Intelligent technology on individual image or in batch
                            of images.
                          </p>

                          <p className="text_16 mb-4">You can correct whole BATCH of PHOTOS with AUTOMATIC
                            BATCH COLOR CORRECTION FACILITY
                          </p>

                          <p className="text_16 mb-4">Automatic and Smart Tools makes COLOR CORRECTION
                            most easy, Manual tools also available.
                          </p>

                        </div>

                        <div>
                          <h4 className="heading_18 mb-3">
                            Photo Editing & Enhancing Tools</h4>

                          <p className="text_16 mb-4">Photo Sense offers world class best album designing
                            software & photo enhancing tools that makes Photo Editing and enhancing
                            very easy and quick. Image Editing tools are backed with artificial
                            intelligent technology that analyses the image, detects the fault and
                            applies required correcting logic with a click.
                          </p>

                          <p className="text_16 mb-4">Quick Mask, Automatic Feather Effect, Auto Focus,
                            Brush Effects are few named here out of lots of easy to use professional
                            image editing options.
                          </p>

                          <p className="text_16 mb-4">This makes your Image look gorgeous. Some of the
                            features and tools are introduced for the First Time in the world and
                            are so unique and unmatched.
                          </p>

                        </div>


                      </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-12">
                      <div className="desc-img">
                        <img src="assets/img/products/insidelogic-album-sense.png" alt="img" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="desc-content mt-2">


                        <div>
                          <h4 className="heading_18 mb-3">
                            Album design using batch process</h4>

                          <p className="text_16 mb-4">PhotoSense gives facility for automatic album
                            designing that offers power to you to design professional wedding album
                            instantly.
                          </p>

                          <p className="text_16 mb-4">Album Sense software is the unique portal gives
                            liberty to Wedding Album Creative designers to choose from thousands of
                            Album Templates and design professional wedding album pages using
                            in-numerous in-built professional wedding album design templates.
                          </p>

                          <p className="text_16 mb-4">
                            Creative and Professional album page design with a click only with
                            PHOTOSENSE , Tons of creative and stunning design templates.
                          </p>

                          <p className="text_16 mb-4">
                            PHOTOSENSE also helps you create entire album with a single click using
                            Batch.
                          </p>


                        </div>

                        <div>
                          <h4 className="heading_18 mb-3">
                            Selection and cutting</h4>

                          <p className="text_16 mb-4">Easy to use multi-dimensional selection and cutting
                            tools, ranging from color, mask, ChromaKey, to tools like Lasso, Magic
                            Wend and Marquee.
                          </p>

                          <p className="text_16 mb-4">Precision and Accuracy that to AUTOMATIC. Be it
                            HAIR, similar background or any complex object our AUTO SELECTION &
                            CUTTING TOOL makes it too easy.
                          </p>

                          <p className="text_16 mb-4">
                            Complete range to tools for PROFESSIONAL AUTO CUTTING available.
                          </p>


                        </div>

                        <div>
                          <h4 className="heading_18 mb-3">
                            Quick and Easy way to apply EFFECTS</h4>

                          <p className="text_16 mb-4">Photosense makes it so easy for you to work with a
                            CLICK, Click to apply EFFECT from Gallery. You can apply Editable Stoke,
                            Photo Box, with single click, you can even change Background Instantly
                            with a click.
                          </p>

                          <p className="text_16 mb-4">Quick and Easy way to apply EFFECTS instantly and
                            create world class designs using PHOTOSENSE.
                          </p>

                          <p className="text_16 mb-4">
                            Use your own PSD or PSD that you have downloaded from NET or our
                            COLLECTION
                          </p>


                        </div>

                        <div>
                          <h4 className="heading_18 mb-3">
                            Customization to make your work Simple, Fast & Easy.</h4>

                          <p className="text_16 mb-4">Yes you can creates your own EFFECTS and apply it on
                            single or batch images. This unique facility is introduced for the first
                            time in the world. It gives you power to use your own creativity and
                            create an EFFECT and Store it. Photosense will help you reduce your
                            manual work by saving the EFFECT with custom name given by you and you
                            can USE IT, REUSE IT.
                          </p>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div id="pshipping" className="tab-pane fade">
                  <div className="desc-content">
                    <h4 className="heading_18 mb-3">Returns within the European Union</h4>
                    <p className="text_16 mb-4">The European law states that when an order is being returned, it
                      is mandatory for the company to refund the product price and shipping costs charged
                      for the original shipment. Meaning: one shipping fee is paid by us.</p>
                    <p className="text_16 mb-4">Standard Shipping: If you placed an order using "standard
                      shipping" and you want to return it, you will be refunded the product price and
                      initial shipping costs. However, the return shipping costs will be paid by you.</p>
                    <p className="text_16">Free Shipping: If you placed an order using "free shipping" and you
                      want to return it, you will be refunded the product price, but since we paid for the
                      initial shipping, you will pay for the return.</p>
                  </div>
                </div>
                <div id="pstyle" className="tab-pane fade">
                  <div className="desc-content">
                    <h4 className="heading_18 mb-3">Style with</h4>
                    <p className="text_16 mb-4">Please also bear in mind that shipping goods back and forth
                      generates greenhouse gases that are accelerating climate change. We encourage you to
                      choose your items carefully to avoid unnecessary return shipments.</p>
                    <p className="text_16 mb-4">You have to pay for return shipping if you want to exchange your
                      product for another size or the package is returned because it has not been picked
                      up at the post office.</p>
                  </div>
                </div>
                <div id="preview" className="tab-pane fade">
                  <div className="review-area accordion-parent">
                    <h4 className="heading_18 mb-3">Customer Reviews</h4>
                    <div className="review-header d-flex justify-content-between align-items-center">
                      <p className="text_16">No reviews yet.</p>
                      <button className="text_14 bg-transparent text-decoration-underline write-btn"
                        type="button">Write a review</button>
                    </div>
                    <div className="review-form-area accordion-child">
                      <form action="#">
                        <fieldset>
                          <label className="label">Full Name</label>
                          <input type="text" placeholder="Enter your name" />
                        </fieldset>
                        <fieldset>
                          <label className="label">Email</label>
                          <input type="email" placeholder="john.smith@example.com" />
                        </fieldset>
                        <fieldset>
                          <label className="label">Rating</label>
                          <div className="star-rating">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                                fill="#B2B2B2" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                                fill="#B2B2B2" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                                fill="#B2B2B2" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                                fill="#B2B2B2" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                                fill="#B2B2B2" />
                            </svg>
                          </div>
                        </fieldset>
                        <fieldset>
                          <label className="label">Review Title</label>
                          <input type="text" placeholder="Give your review a title" />
                        </fieldset>
                        <fieldset>
                          <label className="label">Body of Review (2000)</label>
                          <textarea cols="30" rows="10"
                            placeholder="Write your comments here"></textarea>
                        </fieldset>

                        <button type="submit"
                          className="position-relative review-submit-btn">SUBMIT</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- product tab end --> */}



          {/* <!-- after and before --> */}

          <section className="pt-5 mt-4">

            <div className="container">

              <div className="row">

                <div className="col-md-4">
                  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active mb-3" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Auto correct</button>
                    <button className="nav-link mb-3" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Hue Saturation</button>
                    <button className="nav-link mb-3" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Blending Mode</button>
                    <button className="nav-link mb-3" id="v-pills-tab-1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab-1" type="button" role="tab" aria-controls="v-pills-tab-1" aria-selected="false">Brightness Contrast</button>
                    <button className="nav-link mb-3" id="v-pills-tab-2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab-2" type="button" role="tab" aria-controls="v-pills-tab-2" aria-selected="false">Change Color Light</button>
                    <button className="nav-link mb-3" id="v-pills-tab-3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab-3" type="button" role="tab" aria-controls="v-pills-tab-3" aria-selected="false">Color Balance</button>
                    <button className="nav-link mb-3" id="v-pills-tab-4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab-4" type="button" role="tab" aria-controls="v-pills-tab-4" aria-selected="false">Coloe Mixer Effect</button>
                    <button className="nav-link mb-3" id="v-pills-tab-5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab-5" type="button" role="tab" aria-controls="v-pills-tab-5" aria-selected="false">Fade</button>
                    <button className="nav-link mb-3" id="v-pills-tab-6-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab-6" type="button" role="tab" aria-controls="v-pills-tab-6" aria-selected="false">Focus Tool</button>
                    <button className="nav-link mb-3" id="v-pills-tab-7-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab-7" type="button" role="tab" aria-controls="v-pills-tab-7" aria-selected="false">Jewellery Highlight</button>
                    <button className="nav-link mb-3" id="v-pills-tab-8-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab-8" type="button" role="tab" aria-controls="v-pills-tab-8" aria-selected="false">Curve & Level</button>
                    <button className="nav-link mb-3" id="v-pills-tab-9-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab-9" type="button" role="tab" aria-controls="v-pills-tab-9" aria-selected="false">Pencil Effect</button>
                    <button className="nav-link mb-3" id="v-pills-tab-10-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab-10" type="button" role="tab" aria-controls="v-pills-tab-10" aria-selected="false">Shadow And Highlight</button>
                    <button className="nav-link mb-3" id="v-pills-tab-11-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab-11" type="button" role="tab" aria-controls="v-pills-tab-11" aria-selected="false">Tint And Highlight</button>
                    <button className="nav-link mb-3" id="v-pills-tab-12-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab-12" type="button" role="tab" aria-controls="v-pills-tab-12" aria-selected="false">Toning</button>
                    <button className="nav-link mb-3" id="v-pills-tab-13-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab-13" type="button" role="tab" aria-controls="v-pills-tab-13" aria-selected="false">Transparency On Selection</button>
                    <button className="nav-link mb-3" id="v-pills-tab-14-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tab-14" type="button" role="tab" aria-controls="v-pills-tab-14" aria-selected="false">Water Color Effect</button>
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                      <div className="slider-wrapper">
                        <div className="before-after-container" id="slider-1">
                          <img src="assets/img/after/pic-1.jpg" className="after-img" alt="After Image" />
                          <img src="assets/img/before/pic-1.jpg" className="before-img" alt="Before Image" />
                          <div className="slider"></div>
                          <span className="overlay-text before-text">Before</span>
                          <span className="overlay-text after-text">After</span>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                      <div className="slider-wrapper">
                        <div className="before-after-container" id="slider-2">
                          <img src="assets/img/after/hue-after.jpg" className="after-img" alt="After Image" />
                          <img src="assets/img/before/hue-bef.jpg" className="before-img" alt="Before Image" />
                          <div className="slider"></div>
                          <span className="overlay-text before-text">Before</span>
                          <span className="overlay-text after-text">After</span>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                      <div className="slider-wrapper">
                        <div className="before-after-container" id="slider-3">
                          <img src="assets/img/after/blend-After.jpg" className="after-img" alt="After Image" />
                          <img src="assets/img/before/blend-bef.jpg" className="before-img" alt="Before Image" />
                          <div className="slider"></div>
                          <span className="overlay-text before-text">Before</span>
                          <span className="overlay-text after-text">After</span>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab-1" role="tabpanel" aria-labelledby="v-pills-tab-1-tab" tabindex="0">
                      <div className="slider-wrapper">
                        <div className="before-after-container" id="slider-4">
                          <img src="assets/img/after/pic-4.jpg" className="after-img" alt="After Image" />
                          <img src="assets/img/before/pic-4.jpg" className="before-img" alt="Before Image" />
                          <div className="slider"></div>
                          <span className="overlay-text before-text">Before</span>
                          <span className="overlay-text after-text">After</span>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab-2" role="tabpanel" aria-labelledby="v-pills-tab-2-tab" tabindex="0">
                      <div className="slider-wrapper">
                        <div className="before-after-container" id="slider-5">
                          <img src="assets/img/after/pic-5.jpg" className="after-img" alt="After Image" />
                          <img src="assets/img/before/pic-5.jpg" className="before-img" alt="Before Image" />
                          <div className="slider"></div>
                          <span className="overlay-text before-text">Before</span>
                          <span className="overlay-text after-text">After</span>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab-3" role="tabpanel" aria-labelledby="v-pills-tab-3-tab" tabindex="0">
                      <div className="slider-wrapper">
                        <div className="before-after-container" id="slider-6">
                          <img src="assets/img/after/pic-6.jpg" className="after-img" alt="After Image" />
                          <img src="assets/img/before/pic-6.jpg" className="before-img" alt="Before Image" />
                          <div className="slider"></div>
                          <span className="overlay-text before-text">Before</span>
                          <span className="overlay-text after-text">After</span>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab-4" role="tabpanel" aria-labelledby="v-pills-tab-4-tab" tabindex="0">
                      <div className="slider-wrapper">
                        <div className="before-after-container" id="slider-7">
                          <img src="assets/img/after/pic-7.jpg" className="after-img" alt="After Image" />
                          <img src="assets/img/before/pic-7.jpg" className="before-img" alt="Before Image" />
                          <div className="slider"></div>
                          <span className="overlay-text before-text">Before</span>
                          <span className="overlay-text after-text">After</span>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab-5" role="tabpanel" aria-labelledby="v-pills-tab-5-tab" tabindex="0">
                      <div className="slider-wrapper">
                        <div className="before-after-container" id="slider-8">
                          <img src="assets/img/after/pic-8.jpg" className="after-img" alt="After Image" />
                          <img src="assets/img/before/pic-8.jpg" className="before-img" alt="Before Image" />
                          <div className="slider"></div>
                          <span className="overlay-text before-text">Before</span>
                          <span className="overlay-text after-text">After</span>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab-6" role="tabpanel" aria-labelledby="v-pills-tab-6-tab" tabindex="0">
                      <div className="slider-wrapper">
                        <div className="before-after-container" id="slider-9">
                          <img src="assets/img/after/pic-9.jpg" className="after-img" alt="After Image" />
                          <img src="assets/img/before/pic-9.jpg" className="before-img" alt="Before Image" />
                          <div className="slider"></div>
                          <span className="overlay-text before-text">Before</span>
                          <span className="overlay-text after-text">After</span>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab-7" role="tabpanel" aria-labelledby="v-pills-tab-7-tab" tabindex="0">
                      <div className="slider-wrapper">
                        <div className="before-after-container" id="slider-10">
                          <img src="assets/img/after/pic-10.jpg" className="after-img" alt="After Image" />
                          <img src="assets/img/before/pic-10.jpg" className="before-img" alt="Before Image" />
                          <div className="slider"></div>
                          <span className="overlay-text before-text">Before</span>
                          <span className="overlay-text after-text">After</span>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab-8" role="tabpanel" aria-labelledby="v-pills-tab-8-tab" tabindex="0">
                      <div className="slider-wrapper">
                        <div className="before-after-container" id="slider-11">
                          <img src="assets/img/after/pic-11.jpg" className="after-img" alt="After Image" />
                          <img src="assets/img/before/pic-11.jpg" className="before-img" alt="Before Image" />
                          <div className="slider"></div>
                          <span className="overlay-text before-text">Before</span>
                          <span className="overlay-text after-text">After</span>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab-9" role="tabpanel" aria-labelledby="v-pills-tab-9-tab" tabindex="0">
                      <div className="slider-wrapper">
                        <div className="before-after-container" id="slider-12">
                          <img src="assets/img/after/pic-12.jpg" className="after-img" alt="After Image" />
                          <img src="assets/img/before/pic-12.jpg" className="before-img" alt="Before Image" />
                          <div className="slider"></div>
                          <span className="overlay-text before-text">Before</span>
                          <span className="overlay-text after-text">After</span>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab-10" role="tabpanel" aria-labelledby="v-pills-tab-10-tab" tabindex="0">
                      <div className="slider-wrapper">
                        <div className="before-after-container" id="slider-13">
                          <img src="assets/img/after/pic-13.jpg" className="after-img" alt="After Image" />
                          <img src="assets/img/before/pic-13.jpg" className="before-img" alt="Before Image" />
                          <div className="slider"></div>
                          <span className="overlay-text before-text">Before</span>
                          <span className="overlay-text after-text">After</span>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab-11" role="tabpanel" aria-labelledby="v-pills-tab-11-tab" tabindex="0">
                      <div className="slider-wrapper">
                        <div className="before-after-container" id="slider-14">
                          <img src="assets/img/after/pic-14.jpg" className="after-img" alt="After Image" />
                          <img src="assets/img/before/pic-14.jpg" className="before-img" alt="Before Image" />
                          <div className="slider"></div>
                          <span className="overlay-text before-text">Before</span>
                          <span className="overlay-text after-text">After</span>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab-12" role="tabpanel" aria-labelledby="v-pills-tab-12-tab" tabindex="0">
                      <div className="slider-wrapper">
                        <div className="before-after-container" id="slider-15">
                          <img src="assets/img/after/pic-15.jpg" className="after-img" alt="After Image" />
                          <img src="assets/img/before/pic-15.jpg" className="before-img" alt="Before Image" />
                          <div className="slider"></div>
                          <span className="overlay-text before-text">Before</span>
                          <span className="overlay-text after-text">After</span>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab-13" role="tabpanel" aria-labelledby="v-pills-tab-13-tab" tabindex="0">
                      <div className="slider-wrapper">
                        <div className="before-after-container" id="slider-16">
                          <img src="assets/img/after/pic-16.jpg" className="after-img" alt="After Image" />
                          <img src="assets/img/before/pic-16.jpg" className="before-img" alt="Before Image" />
                          <div className="slider"></div>
                          <span className="overlay-text before-text">Before</span>
                          <span className="overlay-text after-text">After</span>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-tab-14" role="tabpanel" aria-labelledby="v-pills-tab-14-tab" tabindex="0">
                      <div className="slider-wrapper">
                        <div className="before-after-container" id="slider-17">
                          <img src="assets/img/after/pic-17.jpg" className="after-img" alt="After Image" />
                          <img src="assets/img/before/pic-17.jpg" className="before-img" alt="Before Image" />
                          <div className="slider"></div>
                          <span className="overlay-text before-text">Before</span>
                          <span className="overlay-text after-text">After</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </section>


          

            {/* <!-- you may also like start --> */}
            <div className="featured-collection-section mt-100 home-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-heading">You may also like</h2>
                    </div>

                    <div className="row justify-content-center">

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="product-card shadow-sm">
                                <div className="product-card-img text-center">
                                    <a className="hover-switch" href="#">
                                        <img className="primary-img product-img"
                                            src="assets/img/products/edit-zone-gold-projects.png" alt="product-img"/>
                                    </a>

                                    <div className="product-card-action product-card-action-2">
                                        <a href="#quickview-modal" className="quickview-btn btn-primary" 
                                        data-bs-toggle="modal"
                                        data-product-id="Gold-Projects-Edit-Zone"
                                        data-product-name="Gold Projects Edit Zone"
                                        data-product-price="1529.00"
                                        data-product-compare-price="1759.00"
                                        data-product-images='["as-1.png","as-2.jpg","as-3.jpg","as-4.jpg","as-5.jpg","as-6.jpg","as-7.png","as-8.jpg"]'
                                        data-product-rating="4"
                                        data-product-rating-count="22">
                                        QUICKVIEW
                                     </a>
                                        <a href="cart.html" className="addtocart-btn btn-primary" onclick="addToCart('Gold Projects Edit Zone')">ADD TO CART</a>
                                    </div>

                                    <a href="wishlist.html" className="wishlist-btn card-wishlist">
                                        <svg className="icon icon-wishlist" width="26" height="22" viewBox="0 0 26 22"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
                                                fill="black" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="product-card-details text-center pb-3">
                                    <h3 className="product-card-title"><a href="#">Gold Projects Edit Zone</a>
                                    </h3>
                                    <div className="product-card-price">
                                        <span className="card-price-regular">₹1529</span>
                                        <span className="card-price-compare text-decoration-line-through">₹1759</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="product-card shadow-sm">
                                <div className="product-card-img text-center">
                                    <a className="hover-switch" href="#">
                                        <img className="primary-img product-img"
                                            src="assets/img/products/grass-valley-edius-11.png" alt="product-img"/>
                                    </a>

                                    <div className="product-card-action product-card-action-2">
                                        <a href="#quickview-modal" className="quickview-btn btn-primary" 
                                            data-bs-toggle="modal"
                                            data-product-id="Edius-11"
                                            data-product-name="Edius 11"
                                            data-product-price="1000.00"
                                            data-product-compare-price="1500.00"
                                            data-product-images='["edius-1.jpg","edius-2.jpg","edius-3.jpg","edius-4.jpg","edius-5.jpg","edius-6.jpg"]'
                                            data-product-rating="4"
                                            data-product-rating-count="22">
                                            QUICKVIEW
                                         </a>
                                        <a href="cart.html" className="addtocart-btn btn-primary" onclick="addToCart('Edius 11')">ADD TO CART</a>
                                    </div>

                                    <a href="wishlist.html" className="wishlist-btn card-wishlist">
                                        <svg className="icon icon-wishlist" width="26" height="22" viewBox="0 0 26 22"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
                                                fill="black" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="product-card-details text-center pb-3">
                                    <h3 className="product-card-title"><a href="#">Edius 11</a>
                                    </h3>
                                    <div className="product-card-price">
                                        <span className="card-price-regular">₹1000</span>
                                        <span className="card-price-compare text-decoration-line-through">₹1500</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="product-card shadow-sm">
                                <div className="product-card-img text-center">
                                    <a className="hover-switch" href="#">
                                        <img className="primary-img product-img" src="assets/img/products/cut-sense.png"
                                            alt="product-img"/>
                                    </a>

                                    <div className="product-card-action product-card-action-2">
                                        <a href="#quickview-modal" className="quickview-btn btn-primary" 
                                        data-bs-toggle="modal"
                                        data-product-id="Cut-Sense"
                                        data-product-name="Cut Sense"
                                        data-product-price="1529.00"
                                        data-product-compare-price="1759.00"
                                        data-product-images='["as-1.png","as-2.jpg","as-3.jpg","as-4.jpg","as-5.jpg","as-6.jpg","as-7.png","as-8.jpg"]'
                                        data-product-rating="4"
                                        data-product-rating-count="22">
                                        QUICKVIEW
                                     </a>
                                        <a href="cart.html" className="addtocart-btn btn-primary" onclick="addToCart('Cut Sense')">ADD TO CART</a>
                                    </div>

                                    <a href="wishlist.html" className="wishlist-btn card-wishlist">
                                        <svg className="icon icon-wishlist" width="26" height="22" viewBox="0 0 26 22"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
                                                fill="black" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="product-card-details text-center pb-3">
                                    <h3 className="product-card-title"><a href="/">Cut Sense</a>
                                    </h3>
                                    <div className="product-card-price">
                                        <span className="card-price-regular">₹1529</span>
                                        <span className="card-price-compare text-decoration-line-through">₹1759</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {/* <!-- you may also lik end --> */}
        </main>
        <Footer />
        <ScrollUpButton />
        <DrawerMenu />
        <DrawerCart />
        <ProductQuickView />
      </div>
    </>
  )
}

export default AlbumSense
