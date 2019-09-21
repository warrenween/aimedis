import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Feature from 'components/Feature';
import Title from 'components/Title';
import ProductCarousel from 'components/ProductCarousel';
import OverviewList from 'components/OverviewList';

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
                <OverviewList
                  button={true}
                  header="Aimedis is mobile and with cool features"
                  list={[
                    {
                      id: 1,
                      right: 'mobile.png',
                      src: 'mobile.png',
                      subtitle: 'In every actual browser',
                      title: 'Video chat with doctor.',
                    },
                    {
                      id: 2,
                      right: 'mobile.png',
                      src: 'mobile.png',
                      subtitle: 'also fully functional abroad',
                      title: 'Multilanguage',
                    },
                    {
                      id: 3,
                      right: 'mobile.png',
                      src: 'mobile.png',
                      subtitle: 'also for unexperienced patients simple & fast',
                      title: 'Easy to use',
                    },
                  ]}
                />
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
