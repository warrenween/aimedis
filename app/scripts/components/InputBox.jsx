import React from 'react';
import PropTypes from 'prop-types';

const BEGINNING = 'BEGINNING';
const VALIDATE = 'VALIDATE';
const INVALIDATE = 'INVALIDATE';

export class InputBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      flag: BEGINNING,
    };
  }

  onBlur = (e) => {
    const value = e.target.value;
    const { validate } = this.props;
    if (validate && !validate(value)) {
      this.setState({ flag: INVALIDATE });
    }
    else {
      this.setState({ flag: VALIDATE });
    }
  };

  render() {
    const { height, label, validationString } = this.props;
    const { flag } = this.state;
    let style = {};
    let icon = '';

    if (flag === VALIDATE) {
      style = {
        border: '1px solid #03D200',
        height: `${height}rem`,
      };
      icon = 'i-check-circle-o';
    }
    else if (flag === INVALIDATE) {
      style = {
        border: '1px solid #E30000',
        height: `${height}rem`,
      };
      icon = 'i-exclamation-circle';
    }
    else {
      style = {
        height: `${height}rem`,
      };
    }

    return (
      <div className="app__input">
        <label className="app__input__label">
          {label}
        </label>
        <input
          type="text" className="app__input__text" style={style}
          onBlur={this.onBlur}
        />
        {flag !== BEGINNING && <i className={icon} />}
        {flag === INVALIDATE && <div className="app__input__invalid">{validationString}</div>}
      </div>
    );
  }
}

InputBox.propTypes = {
  height: PropTypes.number,
  label: PropTypes.string.isRequired,
  validate: PropTypes.func,
  validationString: PropTypes.string,
};

InputBox.defaultProps = {
  height: 3.5,
};

export default InputBox;
