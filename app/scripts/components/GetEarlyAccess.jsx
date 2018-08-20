import React from 'react';

export default class GetEarlyAccess extends React.PureComponent {
  render() {
    return (
      <div className="app__get__early__access body">
        <input className="app__get__early__access__input" type="text" placeholder="Your Email Address" />
        <button className="app__get__early__access__button btn btn__primary">Get <span className="d-none d-lg-inline">Early </span>Access</button>
      </div>
    );
  }
}
