import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }

  handleClick = () => {
    this.setState({ active: false });
  };

  render() {
    const { children, icon } = this.props;
    const { active } = this.state;
    let html = '';

    if (active) {
      html = (
        <div className="app__notification">
          <div className="app__notification__icon">
            <img src={require(`assets/media/icons/${icon}`)} alt="No Asset" />
          </div>
          <div className="app__notification__content">
            {children}
          </div>
          <div className="app__notification__close" onClick={this.handleClick}>
          x
            <i className="i-times" />
          </div>
        </div>
      );
    }

    return html;
  }
}

Notification.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Notification;
