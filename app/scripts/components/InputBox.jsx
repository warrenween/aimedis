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
    const { validate } = this.props;
    if (validate && !validate(e.target.value)) {
      this.setState({ flag: INVALIDATE });
    }
    else {
      this.setState({ flag: VALIDATE });
    }
  };

  render() {
    const { height, label, multiline, validationString } = this.props;
    const { flag } = this.state;
    let style = {};
    let icon = '';
    let element = '';

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

    if (multiline) {
      element = (
        <textarea
          className="app__input__text" style={style}
          onBlur={this.onBlur}
        />
      );
    }
    else {
      element = (
        <input
          type="text" className="app__input__text" style={style}
          onBlur={this.onBlur}
        />
      );
    }

    return (
      <div className="app__input">
        <label className="app__input__label">
          {label}
        </label>
        {element}
        {flag !== BEGINNING && <i className={icon} />}
        {flag === INVALIDATE && <div className="app__input__invalid">{validationString}</div>}
      </div>
    );
  }
}

InputBox.propTypes = {
  height: PropTypes.number,
  label: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  validate: PropTypes.func,
  validationString: PropTypes.string,
};

InputBox.defaultProps = {
  height: 3.5,
  multiline: false,
};

export default InputBox;
