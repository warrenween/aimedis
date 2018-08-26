import React from 'react';
import GroupToggle from 'components/GroupToggle';

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
        </div>
      </div>
    );
  }
}
