import React from 'react';
import GetEarlyAccess from 'components/GetEarlyAccess';

const Feature = () => {
  return (
    <div className="app__feature">
      <div className="app__feature__title">
        Discover the best features for you.
      </div>
      <div className="app__feature__content">
        <GetEarlyAccess />
      </div>
    </div>
  );
};

export default Feature;
