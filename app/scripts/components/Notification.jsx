import React from 'react';
import PropTypes from 'prop-types';

export default class Notification extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.string.isRequired,
  };

  handleClick = (e) => {
    e.preventDefault();
  };

  render() {
    const { children, icon } = this.props;
    return (
      <div className="app__notification">
        <div className="app__notification__icon">
          <img src={require(`assets/media/icons/` + icon)} alt='No Image'/>
        </div>
        <div className="app__notification__content">
          {children}
        </div>
        <div className="app__notification__close" onClick={this.handleClick}>
          x
          <i className="i-times"></i>
        </div>
      </div>
    );
  }
}
