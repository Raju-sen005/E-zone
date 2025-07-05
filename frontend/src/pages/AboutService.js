import React from 'react';

const AboutService = () => {
  return (
    <div className="about-service pt-100 pb-100">
      <div className="container">
        <div
          className="section-header about-service-header text-center"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <h2 className="section-heading">
            Services we provide to our valued customers
          </h2>
        </div>

        <div className="about-service-wrapper">
          <div className="row justify-content-center">
            {/* Service Box 1 */}
            <div
              className="col-lg-4 col-md-6 col-12 py-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="about-service-inner text-center">
                <div className="about-service-icon">
                  {/* SVG 1 */}
                  {/* 🔽 Your SVG 1 pasted here */}
                </div>
                <div className="about-service-content">
                  <h4 className="about-service-title">Convenient Service</h4>
                  <p className="about-service-subtitle">
                    Through True Rich Attended does no end it his mother since real had half every him end it his mother
                  </p>
                </div>
              </div>
            </div>

            {/* Service Box 2 */}
            <div
              className="col-lg-4 col-md-6 col-12 py-4"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <div className="about-service-inner text-center">
                <div className="about-service-icon">
                  {/* SVG 2 */}
                  {/* 🔽 Your SVG 2 pasted here */}
                </div>
                <div className="about-service-content">
                  <h4 className="about-service-title">Expert Mechanics</h4>
                  <p className="about-service-subtitle">
                    Through True Rich Attended does no end it his mother since real had half every him end it his mother
                  </p>
                </div>
              </div>
            </div>

            {/* Service Box 3 */}
            <div
              className="col-lg-4 col-md-6 col-12 py-4"
              data-aos="fade-up"
              data-aos-duration="1700"
            >
              <div className="about-service-inner text-center">
                <div className="about-service-icon">
                  {/* SVG 3 */}
                  {/* 🔽 Your SVG 3 pasted here */}
                </div>
                <div className="about-service-content">
                  <h4 className="about-service-title">Transparent Pricing</h4>
                  <p className="about-service-subtitle">
                    Through True Rich Attended does no end it his mother since real had half every him end it his mother
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutService;
