import React from 'react';
import GroupToggle from 'components/GroupToggle';
import Title from 'components/Title';
import Location from 'components/Location';

export default class About extends React.PureComponent {
  render() {
    return (
      <div key="About" className="app__about app__route">
        <div className="container">
          <section className="app__about__section1">
            <div className="app__about__section1__content">
              <div className="row">
                <div className="col-12 col-lg-6 app__about__section1__content__info">
                  <p className="app__about__section1__content__info__title">About us</p>
                  <p className="app__about__section1__content__info__description">Aimedis combines your health data, onliner prescriptions, video consultation with doctors and psychologists, information, medical hardware, your smart devices, and more on a single platform on your PC, your smartphone or your tablet, anytime, worldwide and in multiple languages.</p>
                </div>
                <div className="col-5 offset-1 d-none d-lg-block app__about__section1__content__image">
                  <img src={require(`assets/media/images/IMac.png`)} alt='No Image'/>
                  <div className="app__about__section1__content__mask">
                    <img src={require(`assets/media/images/Group 8.png`)} alt='No Image'/>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="app__about__section2">
            <GroupToggle />
          </section>
          <section className="app__about__section3">
            <div className="app__about__section3__title text-center">
              <Title title="Have a questions? Contact us!" subtitle="We are here for you"/>
            </div>
            <div className="app__about__section3__content">
              <div className="row">
                <div className="col-12 col-lg-6 app__about__section3__content__form">
                  <label>Name or Company</label>
                  <input type="text" className="app__about__section3__content__form__name" />
                  <label>E-mail address</label>
                  <input type="email" className="app__about__section3__content__form__email" />
                  <label>Message</label>
                  <input type="text" className="app__about__section3__content__form__message" />
                  <button className="btn btn__primary app__about__section3__content__form__button">SEND</button>
                </div>
                <div className="col-lg-6 app__about__section3__content__telegram">
                  <p className="app__about__section3__content__telegram__title">Official Aimedis Support Group is on <span>Telegram</span></p>
                  <a className="app__about__section3__content__telegram__link" href="#">View channel</a>
                  <img className="app__about__section3__content__telegram__image" src={require(`assets/media/images/telegram.png`)} alt='No Image' />
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="app__about__section4">
          <Location />
          <div className="container">
            <div className="row">
              <div className="app__about__section4__content">
                <div className="app__about__section4__content__info">
                  <p className="app__about__section4__content__info__title">OUR LOCATION</p>
                  <p className="app__about__section4__content__info__subtitle">
                    Sint Michaëlstraat 4,
                    <br/>
                    5935 BL Steyl, Netherlands
                  </p>
                  <a className="app__about__section4__content__info__link" href="#">See on google maps</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
