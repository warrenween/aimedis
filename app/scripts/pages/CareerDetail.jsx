import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

const CareerDetail = ({ match }) => (
  <div key="CareerDetail" className="app__career__detail app__route">
    <p className="d-none">{match.params.id}</p>
    <div className="container">
      <section className="app__career__detail__section1">
        <div className="app__career__detail__section1__content">
          <div className="row">
            <div className="col-12 col-lg-7">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <p className="app__career__detail__section1__content__title">Web Developer</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <p className="app__career__detail__section1__content__subtitle m-0">React native / JS, Node JS, NoSQL, PHP</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <div className="app__career__detail__section1__content__info">
                  <div className="app__career__detail__section1__content__info__element">
                    <div className="app__career__detail__section1__content__info__element__icon"><i className="i-map-marker" /></div>
                    <div className="app__career__detail__section1__content__info__element__text">VENLO</div>
                  </div>
                  <div className="app__career__detail__section1__content__info__element">
                    <div className="app__career__detail__section1__content__info__element__icon"><i className="i-clock-o" /></div>
                    <div className="app__career__detail__section1__content__info__element__text">FULL-TIME</div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <p className="app__career__detail__section1__content__description">
                  At World Vision, we're sharing a big dream for children. One that moves beyond just clean water or food or healthcare to offer a full solution to poverty.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <p className="app__career__detail__section1__content__description">
                  We want children to have everything they need to thrive, both physically and spiritually, so they can experience the kind of life God intends life in all its fullness.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <p className="app__career__detail__section1__content__subtitle">Required Experience :</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <div className="app__career__detail__section1__content__description">
                  <ul>
                    <li>Bachelor’s degree in design, digital art, interaction design or related field or equivalent work experience (eight years).</li>
                    <li>Previous work experience implementing, managing and / or leading within the digital creative field, 8-10 years, preferably in an agency (internal or external) environment.</li>
                    <li>At least 5 years of UX design as a key, hands-on interaction / visual designer of a UI / UX team through the product development cycle.</li>
                    <li>Expansive knowledge of layout, typography, mobile technology and web-based graphics and animations, and expert knowledge of design programs including Adobe Creative Suite, Sketch, InVision.</li>
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <p className="app__career__detail__section1__content__description">
                  Motion design skills preferred. A portfolio of sample projects will be requested.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <p className="app__career__detail__section1__content__subtitle">Benefits :</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <div className="app__career__detail__section1__content__description">
                  <ul>
                    <li>Bachelor’s degree in design, digital art, interaction design or related field or equivalent work experience (eight years).</li>
                    <li>Previous work experience implementing, managing and / or leading within the digital creative field, 8-10 years, preferably in an agency (internal or external) environment.</li>
                    <li>At least 5 years of UX design as a key, hands-on interaction / visual designer of a UI / UX team through the product development cycle.</li>
                    <li>Expansive knowledge of layout, typography, mobile technology and web-based graphics and animations, and expert knowledge of design programs including Adobe Creative Suite, Sketch, InVision.</li>
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <p className="app__career__detail__section1__content__reference mb-1">
                  In order to apply to this posotion, please send:
                </p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <div className="app__career__detail__section1__content__description m-0">
                  <ul>
                    <li>CV</li>
                    <li>Cover Letter</li>
                    <li>link to LinkedIn profile (if there is one)</li>
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <p className="app__career__detail__section1__content__reference mt-1">
                  to email address <a href="mailto:jobs@aimedis.com">jobs@aimedis.com</a>
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      <section className="app__career__detail__mask d-none d-lg-block">
        <div className="app__career__detail__mask__one">
          <img src={require('assets/media/images/Group 2.png')} alt="No Asset" />
        </div>
        <div className="app__career__detail__mask__two">
          <img src={require('assets/media/images/Group 8.png')} alt="No Asset" />
        </div>
      </section>
    </div>
  </div>
);

CareerDetail.propTypes = {
  match: PropTypes.object,
};

CareerDetail.defaultProps = {
  match: {
    params: {
      id: 1,
    },
  },
};

export default CareerDetail;
