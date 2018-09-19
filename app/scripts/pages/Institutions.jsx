import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Title from 'components/Title';
import OverviewList from 'components/OverviewList';
import InstitutionsItem from 'components/InstitutionsItem';
import Feature from 'components/Feature';

export default class Institutions extends React.PureComponent {
  render() {
    return (
      <div key="Institutions" className="app__institutions app__route">
        <div className="container">
          <section className="app__institutions__section1">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="app__institutions__section1__title">
                <Title title="Who gets the most out of Aimedis" subtitle="institutions" />
              </div>
              <div className="app__institutions__section1__content">
                <OverviewList list={[
                  {
                    id: 1,
                    link: 'assets/media/images/institutions-web.png',
                    right: 'institutions-web.png',
                    src: 'institutions-mobile.png',
                    subtitle: 'Excepteur sint accaecut cupidatat n every actual browser',
                    title: 'Insurance companies',
                  },
                  {
                    id: 2,
                    link: 'assets/media/images/institutions-web.png',
                    right: 'institutions-web.png',
                    src: 'institutions-mobile.png',
                    subtitle: 'Excepteur sint accaecut cupidatat n every actual browser',
                    title: 'Hospitals',
                  },
                  {
                    id: 3,
                    link: 'assets/media/images/institutions-web.png',
                    right: 'institutions-web.png',
                    src: 'institutions-mobile.png',
                    subtitle: 'Excepteur sint accaecut cupidatat n every actual browser',
                    title: 'Pharma Companies',
                  },
                ]}
                />
              </div>
            </ScrollAnimation>
          </section>
          <section className="app__institutions__section2 d-none d-lg-block">
            <InstitutionsItem
              title="Dois aute irure dolor" subtitle="INSURANCE COMPANIES"
              description="Soon Aimedis will offer much more including AIMSocial - the interactive patient platform that is secured and supported by a blockchain and help."
              src="institutions-bg2.png"
              align="left"
            />
            <InstitutionsItem
              title="Dois aute irure dolor" subtitle="Hospitals"
              description="Soon Aimedis will offer much more including AIMSocial - the interactive patient platform that is secured and supported by a blockchain and help."
              src="institutions-bg1.png"
              align="right"
            />
            <InstitutionsItem
              title="Dois aute irure dolor" subtitle="Pharma Companies"
              description="Soon Aimedis will offer much more including AIMSocial - the interactive patient platform that is secured and supported by a blockchain and help."
              src="institutions-bg2.png"
              align="left"
            />
          </section>
          <section className="app__institutions__section3">
            <Feature />
          </section>
        </div>
      </div>
    );
  }
}
