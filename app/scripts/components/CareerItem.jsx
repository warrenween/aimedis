import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CareerItem extends React.PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;
    return (
      <div className="app__career__item">
        <div className="app__career__item__content">
          <div className="app__career__item__content__info">
            <p className="app__career__item__content__info__title">{ item.title }</p>
            <p className="app__career__item__content__info__subtitle">{ item.subtitle }</p>
            <div className="app__career__item__content__info__icon">
              <span><i className="i-map-marker"></i> { item.location }</span>
              <span><i className="i-clock-o"></i> { item.availability }</span>
            </div>
          </div>
          <div className="app__career__item__content__button">
            <Link className="btn btn__primary" to={"/career/" + item.id}>
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
