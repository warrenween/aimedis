import React from 'react';
import PropTypes from 'prop-types';

export default class BlogItem extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  };

  render() {
    const { title, description, src } = this.props;
    return (
      <div className="app__blog__item">
        <div className="app__blog__item__content">
          <div className="app__blog__item__content__img">
            <img src={require('assets/media/images/' + src)} />
          </div>
          <p className="app__blog__item__content__title">{title}</p>
          <p className="app__blog__item__content__description">{description}</p>
        </div>
      </div>
    );
  }
}
