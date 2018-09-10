import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

const BlogItem = ({ item }) => (
  <Link to={`/blog/${item.id}`}>
    <ScrollAnimation animateIn="flipInY" animateOnce={true}>
      <div className="app__blog__item">
        <div className="app__blog__item__content">
          <div className="app__blog__item__content__img">
            <img src={require(`assets/media/images/${item.src}`)} alt="No Item Asset" />
          </div>
          <p className="app__blog__item__content__title">{item.title}</p>
          <p className="app__blog__item__content__description">{item.description}</p>
        </div>
      </div>
    </ScrollAnimation>
  </Link>
);

BlogItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default BlogItem;
