import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class GroupToggleItem extends React.PureComponent {
  static propTypes = {
    facebook: PropTypes.string,
    last: PropTypes.bool,
    linkedin: PropTypes.string,
    src: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { src, title, subTitle, facebook, linkedin, last } = this.props;
    if (!last) {
      return (
        <div className="app__group__toggle__item">
          <div className="app__group__toggle__item__image">
            <img src={require(`assets/media/images/${src}`)} alt="No Asset" />
          </div>
          <p className="app__group__toggle__item__title">{title}</p>
          <p className="app__group__toggle__item__subtitle">{subTitle}</p>
          <div className="app__group__toggle__item__link">
            <Link to={facebook} className="app__group__toggle__item__link__facebook">
              <img src={require('assets/media/icons/facebook.png')} alt="No Asset" />
            </Link>
            <Link to={linkedin} className="app__group__toggle__item__link__linkedin">
              <img src={require('assets/media/icons/linkedin.png')} alt="No Asset" />
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div className="app__group__toggle__item">
        <div className="app__group__toggle__item__last">
          <div className="app__group__toggle__item__last__image">
            <img src={require(`assets/media/images/${src}`)} alt="No asset" />
          </div>
          <p className="app__group__toggle__item__last__title">{title}</p>
          <Link className="btn btn__secondary app__group__toggle__item__last__subtitle" to="/career">{subTitle}</Link>
        </div>
      </div>
    );
  }
}
