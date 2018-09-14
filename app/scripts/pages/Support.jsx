import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Support extends React.PureComponent {
  render() {
    return (
      <div key="Support" className="app__support app__route">
        <div className="container">
          <section className="app__support__section1">
            <div className="app__support__section1__content">
              <div className="row">
                <div className="col-12 col-lg-6 offset-lg-3">
                  <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                    <p className="app__support__section1__content__title">
                      Support Message
                    </p>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                    <p className="app__support__section1__content__description">
                      If you have a question or are experiencing issues with Aimedis, you can send us a Sopprt Message and we will back to you ASAP
                    </p>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                    <div className="app__support__section1__content__form">
                      <label>Name or Company</label>
                      <input type="text" className="app__support__section1__content__form__name" />
                      <label>E-mail address</label>
                      <input type="email" className="app__support__section1__content__form__email" />
                      <label>Message</label>
                      <input type="text" className="app__support__section1__content__form__message" />
                      <button type="button" className="btn btn__primary app__support__section1__content__form__button">SEND</button>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </section>
          <section className="app__support__section2 d-none d-lg-block">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
              <div className="app__support__notification">
                <p className="app__support__notification__context">Support Message was send succesfuly!</p>
                <div className="app__support__notification__icon">
                  <i className="i-check-circle-o" />
                </div>
              </div>
            </ScrollAnimation>
          </section>
        </div>
      </div>
    );
  }
}
