import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import GroupToggle from 'components/GroupToggle';
import Title from 'components/Title';
import Location from 'components/Location';
import InputBox from 'components/InputBox';
import { Link } from 'react-router-dom';

export default class About extends React.PureComponent {
  render() {
    const email = (value) => {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(value).toLowerCase());
    };

    return (
      <div key="About" className="app__about app__route">
        <div className="container">
          <section className="app__about__section1">
            <div className="app__about__section1__content">
              <div className="row">
                <div className="col-12 col-lg-6 app__about__section1__content__info">
                  <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                    <p className="app__about__section1__content__info__title">About us</p>
                    <p className="app__about__section1__content__info__description">Aimedis combines your health data, onliner prescriptions, video consultation with doctors and psychologists, information, medical hardware, your smart devices, and more on a single platform on your PC, your smartphone or your tablet, anytime, worldwide and in multiple languages.</p>
                  </ScrollAnimation>
                </div>
                <div className="col-5 offset-1 d-none d-lg-block app__about__section1__content__image">
                  <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                    <img src={require('assets/media/images/IMac.png')} alt="No Asset" />
                    <div className="app__about__section1__content__mask">
                      <img src={require('assets/media/images/Group 8.png')} alt="No Asset" />
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </section>
          <section className="app__about__section2">
            <GroupToggle />
          </section>
          <section className="app__about__section3">
            <div className="app__about__section3__title text-center">
              <Title title="Have a questions? Contact us!" subtitle="We are here for you" />
            </div>
            <div className="app__about__section3__content">
              <div className="row">
                <div className="col-12 col-lg-6 app__about__section3__content__form">
                  <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                    <InputBox label="Name or Company" height={3.5} />
                    <InputBox label="E-mail address" height={3.5} validate={email} validationString="Email is invalid." />
                    <InputBox label="Message" height={11.125} />
                    <button type="button" className="btn btn__primary app__about__section3__content__form__button">SEND</button>
                  </ScrollAnimation>
                </div>
                <div className="col-lg-6 app__about__section3__content__telegram">
                  <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                    <p className="app__about__section3__content__telegram__title">Official Aimedis Support Group is on <span>Telegram</span></p>
                    <Link className="app__about__section3__content__telegram__link" to="#">View channel</Link>
                    <img className="app__about__section3__content__telegram__image" src={require('assets/media/images/telegram.png')} alt="No Asset" />
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </section>
        </div>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <section className="app__about__section4">
            <Location />
            <div className="container">
              <div className="row">
                <div className="app__about__section4__content">
                  <div className="app__about__section4__content__info">
                    <p className="app__about__section4__content__info__title">OUR LOCATION</p>
                    <p className="app__about__section4__content__info__subtitle">
                      Sint Michaëlstraat 4,
                      <br />
                      5935 BL Steyl, Netherlands
                    </p>
                    <Link className="app__about__section4__content__info__link" to="#">See on google maps</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}
