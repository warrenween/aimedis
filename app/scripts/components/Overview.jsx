import React from 'react';
import PropTypes from 'prop-types';

export default class Overview extends React.PureComponent {
  static propTypes = {
    order: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    active: PropTypes.bool,
  };

  render() {
    const { order, title, subtitle, src, active } = this.props;
    return (
      <div className={"app__overview" + (active ? " active" : "")}>
        <div className="app__overview__internal">
          <div className="app__overview__internal__content">
            <div className="app__overview__internal__content__order">
              <p className="app__overview__internal__content__order__text body">{order}</p>
            </div>
            <div className="app__overview__internal__content__paragraph">
              <p className="app__overview__internal__content__paragraph__title title">{title}</p>
              <p className="app__overview__internal__content__paragraph__subtitle body">{subtitle}</p>
            </div>
            <div className="app__overview__internal__content__next ml-auto">
              <span className="i-long-arrow-right d-none d-lg-inline" />
              <span className="i-long-arrow-down d-inline d-lg-none" />
            </div>
          </div>
        </div>
        <div className="app__overview__external">
          <img src={require(`assets/media/images/` + src)} alt='No Image' />
        </div>
      </div>
    );
  }
}
