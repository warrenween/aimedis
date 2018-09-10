import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import GetEarlyAccess from 'components/GetEarlyAccess';

const Feature = () => (
  <div className="app__feature">
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <div className="app__feature__title">
        Discover the best features for you.
      </div>
      <div className="app__feature__content">
        <GetEarlyAccess />
      </div>
    </ScrollAnimation>
  </div>
);

export default Feature;
