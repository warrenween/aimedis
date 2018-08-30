import React from 'react';
import PropTypes from 'prop-types';

class CareerDetail extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      item: {
        id: props.match.params.id,
      },
    };
  }

  render() {
    const { item } = this.state;
    return (
      <div key="CareerDetail" className="app__career__detail app__route">
        <div className="container">
          <section className="app__career__detail__section1">
            <div className="app__career__detail__section1__content">
              <div className="row">
                <div className="col-12 col-lg-7">
                  <p className="app__career__detail__section1__content__title">Web Developer</p>
                  <p className="app__career__detail__section1__content__subtitle m-0">React native / JS, Node JS, NoSQL, PHP</p>
                  <div className="app__career__detail__section1__content__info">
                    <div className="app__career__detail__section1__content__info__element">
                      <div className="app__career__detail__section1__content__info__element__icon"><i className="i-map-marker"></i></div>
                      <div className="app__career__detail__section1__content__info__element__text">VENLO</div>
                    </div>
                    <div className="app__career__detail__section1__content__info__element">
                      <div className="app__career__detail__section1__content__info__element__icon"><i className="i-clock-o"></i></div>
                      <div className="app__career__detail__section1__content__info__element__text">FULL-TIME</div>
                    </div>
                  </div>
                  <p className="app__career__detail__section1__content__description">
                    At World Vision, we're sharing a big dream for children. One that moves beyond just clean water or food or healthcare to offer a full solution to poverty.
                  </p>
                  <p className="app__career__detail__section1__content__description">
                    We want children to have everything they need to thrive, both physically and spiritually, so they can experience the kind of life God intends life in all its fullness.
                  </p>
                  <p className="app__career__detail__section1__content__subtitle">Required Experience :</p>
                  <div className="app__career__detail__section1__content__description">
                    <ul>
                      <li>Bachelor’s degree in design, digital art, interaction design or related field or equivalent work experience (eight years).</li>
                      <li>Previous work experience implementing, managing and / or leading within the digital creative field, 8-10 years, preferably in an agency (internal or external) environment.</li>
                      <li>At least 5 years of UX design as a key, hands-on interaction / visual designer of a UI / UX team through the product development cycle.</li>
                      <li>Expansive knowledge of layout, typography, mobile technology and web-based graphics and animations, and expert knowledge of design programs including Adobe Creative Suite, Sketch, InVision.</li>
                    </ul>
                  </div>
                  <p className="app__career__detail__section1__content__description">
                    Motion design skills preferred. A portfolio of sample projects will be requested.
                  </p>
                  <p className="app__career__detail__section1__content__subtitle">Benefits :</p>
                  <div className="app__career__detail__section1__content__description">
                    <ul>
                      <li>Bachelor’s degree in design, digital art, interaction design or related field or equivalent work experience (eight years).</li>
                      <li>Previous work experience implementing, managing and / or leading within the digital creative field, 8-10 years, preferably in an agency (internal or external) environment.</li>
                      <li>At least 5 years of UX design as a key, hands-on interaction / visual designer of a UI / UX team through the product development cycle.</li>
                      <li>Expansive knowledge of layout, typography, mobile technology and web-based graphics and animations, and expert knowledge of design programs including Adobe Creative Suite, Sketch, InVision.</li>
                    </ul>
                  </div>
                  <p className="app__career__detail__section1__content__reference mb-1">
                    In order to apply to this posotion, please send:
                  </p>
                  <div className="app__career__detail__section1__content__description m-0">
                    <ul>
                      <li>CV</li>
                      <li>Cover Letter</li>
                      <li>link to LinkedIn profile (if there is one)</li>
                    </ul>
                  </div>
                  <p className="app__career__detail__section1__content__reference mt-1">
                    to email address <span>jobs@aimedis.com</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="app__career__detail__mask d-none d-lg-block">
            <div className="app__career__detail__mask__one">
              <img src={require('assets/media/images/Group 2.png')} alt="No Image"/>
            </div>
            <div className="app__career__detail__mask__two">
              <img src={require('assets/media/images/Group 8.png')} alt="No Image"/>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

CareerDetail.propTypes = {
  match: PropTypes.object.isRequired,
};

CareerDetail.defaultProps = {
};

export default CareerDetail;
