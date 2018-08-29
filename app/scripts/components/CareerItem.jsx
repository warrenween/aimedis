import React from 'react';
import PropTypes from 'prop-types';

export default class CareerItem extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    availability: PropTypes.string.isRequired,
  };

  render() {
    const { title, subtitle, location, availability } = this.props;
    return (
      <div className="app__career__item">
        <div className="app__career__item__content">
          <div className="app__career__item__content__info">
            <p className="app__career__item__content__info__title">{ title }</p>
            <p className="app__career__item__content__info__subtitle">{ subtitle }</p>
            <div className="app__career__item__content__info__icon">
              <span><i className="i-map-marker"></i> { location }</span>
              <span><i className="i-clock-o"></i> { availability }</span>
            </div>
          </div>
          <div className="app__career__item__content__button">
            <button className="btn btn__primary">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    );
  }
}
