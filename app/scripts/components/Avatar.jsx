import React from 'react';
import PropTypes from 'prop-types';

export default class Avatar extends React.PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
  };

  render() {
    const { src } = this.props;
    return (
      <div className="app__avatar">
        <img className="app__avatar__image" src={require(`assets/media/icons/` + src)} alt='No Image'/>
      </div>
    );
  }
}
