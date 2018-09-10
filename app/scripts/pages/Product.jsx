import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Feature from 'components/Feature';
import Title from 'components/Title';
import Overview from 'components/Overview';
import ProductCarousel from 'components/ProductCarousel';

export default class Product extends React.PureComponent {
  render() {
    return (
      <div key="Product" className="app__product app__route">
        <div className="container">
          <section className="app__product__section1">
            <ProductCarousel />
          </section>
          <section className="app__product__section2">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="app__product__section2__title text-center d-block d-lg-none">
                <Title title="Cool features" subtitle="Platform Overview" />
              </div>
              <div className="app__product__section2__content">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <p className="app__product__section2__content__title d-none d-lg-block">Aimedis is mobile and with cool features</p>
                    <Overview
                      order={1} title="Video chat with doctor." subtitle="In every actual browser" src="mobile.png"
                      active={true}
                    />
                    <Overview order={2} title="Multilanguage" subtitle="also fully functional abroad" src="mobile.png" />
                    <Overview order={3} title="Easy to use" subtitle="also for unexperienced patients simple & fast" src="mobile.png" />
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                      <div className="app__product__section2__content__mobile d-none d-lg-flex">
                        <div className="app__product__section2__content__mobile__button">
                          <img src={require('assets/media/icons/apple-icon.png')} alt="No Asset" />
                          <div className="app__product__section2__content__mobile__button__title">
                            <p className="app__product__section2__content__mobile__button__title__small">Available on the</p>
                            <p className="app__product__section2__content__mobile__button__title__big">App Store</p>
                          </div>
                        </div>
                        <div className="app__product__section2__content__mobile__button">
                          <img src={require('assets/media/icons/google_play.png')} alt="No Asset" />
                          <div className="app__product__section2__content__mobile__button__title">
                            <p className="app__product__section2__content__mobile__button__title__small">Available on the</p>
                            <p className="app__product__section2__content__mobile__button__title__big">Google Play</p>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                  <div className="col-lg-6 d-none d-lg-block app__product__section2__content__mobile__image">
                    <img src={require('assets/media/images/mobile.png')} alt="No Asset" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </section>
          <section className="app__product__section3">
            <Feature />
          </section>
          <section className="app__product__mask d-none d-lg-block">
            <div className="app__product__mask__two">
              <img src={require('assets/media/images/Group 8.png')} alt="No Asset" />
            </div>
            <div className="app__product__mask__four">
              <img src={require('assets/media/images/Group 2.png')} alt="No Asset" />
            </div>
            <div className="app__product__mask__five">
              <img src={require('assets/media/images/Group 2.png')} alt="No Asset" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
