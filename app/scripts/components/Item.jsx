import React from 'react';
import PropTypes from 'prop-types';

export default class Item extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  };

  render() {
    const { title, icon, src } = this.props;
    return (
      <div className="app__item">
        <div className="app__item__visible">
          <i className={icon} />
          <img src={src} />
          <p>{title}</p>
        </div>
      </div>
    );
  }
}
