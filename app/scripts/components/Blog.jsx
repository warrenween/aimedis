import React from 'react';
import PropTypes from 'prop-types';

export default class Blog extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  };

  render() {
    const { title, description, src } = this.props;
    return (
      <div className="app__blog">
        <div className="app__blog__content">
          <div className="app__blog__content__img">
            <div className="app__blog__content__img__alt">{src}</div>
          </div>
          <p className="app__blog__content__title">{title}</p>
          <p className="app__blog__content__description">{description}</p>
        </div>
      </div>
    );
  }
}
