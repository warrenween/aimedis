import React from 'react';
import CareerItem from 'components/CareerItem';

export default class Career extends React.PureComponent {
  render() {
    return (
      <div key="Career" className="app__career app__route">
        <div className="container">
          <section className="app__career__section1">
            <div className="app__career__section1__content">
              <div className="row">
                <div className="col-12">
                  <div className="app__career__section1__content__info">
                    <p className="app__career__section1__content__info__title">Careers</p>
                    <p className="app__career__section1__content__info__subtitle">Open positions</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="app__career__section2">
            <div className="app__career__section2__content">
              <div className="row">
                <div className="col-12 app__career__section2__content__item">
                  <CareerItem
                    item={{
                      id: 1,
                      title: 'Web devoloper',
                      subtitle: 'React native / JS, Node JS, NoSQL, PHP',
                      location: 'VENLO',
                      availability: 'FULL-TIME',
                    }}
                  />
                </div>
                <div className="col-12 app__career__section2__content__item">
                  <CareerItem
                    item={{
                      id: 2,
                      title: 'Web devoloper',
                      subtitle: 'React native / JS, Node JS, NoSQL, PHP',
                      location: 'VENLO',
                      availability: 'FULL-TIME',
                    }}
                  />
                </div>
                <div className="col-12 app__career__section2__content__item">
                  <CareerItem
                    item={{
                      id: 3,
                      title: 'Web devoloper',
                      subtitle: 'React native / JS, Node JS, NoSQL, PHP',
                      location: 'VENLO',
                      availability: 'FULL-TIME',
                    }}
                  />
                </div>
                <div className="col-12 app__career__section2__content__item">
                  <CareerItem
                    item={{
                      id: 4,
                      title: 'Web devoloper',
                      subtitle: 'React native / JS, Node JS, NoSQL, PHP',
                      location: 'VENLO',
                      availability: 'FULL-TIME',
                    }}
                  />
                </div>
                <div className="col-12 app__career__section2__content__item">
                  <CareerItem
                    item={{
                      id: 5,
                      title: 'Web devoloper',
                      subtitle: 'React native / JS, Node JS, NoSQL, PHP',
                      location: 'VENLO',
                      availability: 'FULL-TIME',
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="app__career__section3">
            <div className="app__career__section3__content">
              <div className="row app__career__section3__content__culture">
                <div className="col-12 col-lg-6 app__career__section3__content__info">
                  <div>
                    <p className="app__career__section3__content__info__title">Our Culture</p>
                    <p className="app__career__section3__content__info__description">Soon Aimedis will offer much more including AIMSocial - the interactive patient platform that is secured and supported by a blockchain and help.</p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <img src={require('assets/media/images/career1.png')} alt="No Asset" />
                </div>
              </div>
              <div className="row app__career__section3__content__mission">
                <div className="col-12 col-lg-6">
                  <img src={require('assets/media/images/career2.png')} alt="No Asset" />
                </div>
                <div className="col-12 col-lg-6 app__career__section3__content__info">
                  <div>
                    <p className="app__career__section3__content__info__title">Our Mission</p>
                    <p className="app__career__section3__content__info__description">Soon Aimedis will offer much more including AIMSocial - the interactive patient platform that is secured and supported by a blockchain and help.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="app__career__mask d-none d-lg-block">
            <div className="app__career__mask__one">
              <img src={require('assets/media/images/team_mask.png')} alt="No Asset" />
            </div>
            <div className="app__career__mask__two">
              <img src={require('assets/media/images/Group 8.png')} alt="No Asset" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
