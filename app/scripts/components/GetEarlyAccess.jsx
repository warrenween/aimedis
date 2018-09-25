import React from 'react';

const BEGINNING = 'BEGINNING';
const VALIDATE = 'VALIDATE';
const INVALIDATE = 'INVALIDATE';

class GetEarlyAccess extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      flag: BEGINNING,
    };
  }

  onBlur = (e) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      this.setState({ flag: INVALIDATE });
    }
    else {
      this.setState({ flag: VALIDATE });
    }
  };

  render() {
    const { flag } = this.state;
    let style = {};

    if (flag === VALIDATE) {
      style = {
        border: '1px solid #03D200',
      };
    }
    else if (flag === INVALIDATE) {
      style = {
        border: '1px solid #E30000',
      };
    }

    return (
      <div className="app__get__early__access">
        <input
          className="app__get__early__access__input"
          style={style}
          type="text"
          placeholder="Your Email Address"
          onBlur={this.onBlur}
        />
        <button type="button" className="app__get__early__access__button btn btn__primary">
          Get <span className="d-none d-lg-inline">Early </span>Access
        </button>
      </div>
    );
  };
}

export default GetEarlyAccess;
