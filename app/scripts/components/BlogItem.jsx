import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class BlogItem extends React.PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;
    return (
      <Link to={"/blog/" + item.id}>
        <div className="app__blog__item">
          <div className="app__blog__item__content">
            <div className="app__blog__item__content__img">
              <img src={require(`assets/media/images/${item.src}`)} />
            </div>
            <p className="app__blog__item__content__title">{item.title}</p>
            <p className="app__blog__item__content__description">{item.description}</p>
          </div>
        </div>
      </Link>
    );
  }
}
