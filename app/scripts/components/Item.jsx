import React from 'react';
import PropTypes from 'prop-types';

export default class Item extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    align: PropTypes.string.isRequired,
    src: PropTypes.string,
  };

  render() {
    const { title, icon, align, src } = this.props;
    return (
      <div className="app__item">
        <div className={"app__item__icon" + (align === 'center' ? " mx-auto" : "")}>
          <img className="app__item__icon__img" src={require(`assets/media/icons/${icon}.png`)} alt='No Image' />
        </div>
        <p className={"app__item__title title" + (align === 'center' ? " mx-lg-3" : "")}>{title}</p>
      </div>
    );
  }
}
