import React from 'react';
import PropTypes from 'prop-types';

export default class Item extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    src: PropTypes.string,
    active: PropTypes.bool,
  };

  render() {
    const { title, icon, src, active } = this.props;
    return (
      <div className={"app__item" + (active ? " active" : "")}>
        <div className="app__item__icon mx-auto">
          <img className="app__item__icon__img" src={require(`assets/media/icons/${icon}.png`)} alt='No Image' />
          <div className="app__item__icon__active">
            <div className="app__item__icon__active__circle" />
            <div className="app__item__icon__active__triangle" />
          </div>
        </div>
        <p className="app__item__title mx-auto">{title}</p>
        <div className="app__item__active">
        </div>
      </div>
    );
  }
}
