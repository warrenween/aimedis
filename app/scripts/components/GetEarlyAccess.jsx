import React from 'react';

const GetEarlyAccess = () => {
  return (
    <div className="app__get__early__access">
      <input className="app__get__early__access__input" type="text" placeholder="Your Email Address" />
      <button type="button" className="app__get__early__access__button btn btn__primary">Get <span className="d-none d-lg-inline">Early </span>Access</button>
    </div>
  );
};

export default GetEarlyAccess;
