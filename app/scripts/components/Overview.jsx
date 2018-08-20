import React from 'react';
import PropTypes from 'prop-types';

export default class Overview extends React.PureComponent {
  static propTypes = {
    order: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  };

  render() {
    const { order, title, subtitle } = this.props;
    return (
      <div className="app__overview">
        <div className="app__overview__content">
          <div className="app__overview__content__order">
            <p className="app__overview__content__order__text body">{order}</p>
          </div>
          <div className="app__overview__content__paragraph">
            <p className="app__overview__content__paragraph__title title">{title}</p>
            <p className="app__overview__content__paragraph__subtitle body">{subtitle}</p>
          </div>
          <div className="app__overview__content__next ml-auto">
            <span>&gt;</span>
          </div>
        </div>
      </div>
    );
  }
}
