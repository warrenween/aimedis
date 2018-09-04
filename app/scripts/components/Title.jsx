import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.PureComponent {
  static propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title, subtitle } = this.props;
    return (
      <div className="app__title">
        <p className="app__title__subtitle">{subtitle}</p>
        <p className="app__title__title">{title}</p>
      </div>
    );
  }
}
