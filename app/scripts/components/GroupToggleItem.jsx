import React from 'react';
import PropTypes from 'prop-types';

export default class GroupToggleItem extends React.PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    facebook: PropTypes.string,
    linkedin: PropTypes.string,
  };

  render() {
    const { src, title, subTitle, facebook, linkedin } = this.props;
    return (
      <div className="app__group__toggle__item">
      </div>
    );
  }
}
