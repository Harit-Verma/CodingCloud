import React from "react";

const About = () => {
  return (
    <div className="rbt-header-sticky">

      {/* Start CallTo Action Area */}
      <div className="rbt-call-to-action-area rbt-section-gap bg-gradient-8">
        <div className="rbt-callto-action rbt-cta-default style-6">
          <div className="container">
            <div className="row g-5 align-items-center content-wrapper">

              <div className="col-xxl-3 col-xl-3 col-lg-6">
                <div className="inner">
                  <div className="content text-start">
                    <h2 className="title color-white mb--0">
                      Scholarship Programs
                    </h2>
                  </div>
                </div>
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <p className="color-white mb--0">
                  Apply for scholarships and start learning with us today.
                </p>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-12 text-end">
                <a className="rbt-btn btn-white hover-icon-reverse" href="#">
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Apply Now</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* End CallTo Action Area */}

    </div>
  );
};

export default About;
