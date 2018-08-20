import React from 'react';

export default class VideoMask extends React.PureComponent {
  render() {
    return (
      <div className="app__video__mask">
        <div className="app__video__mask__circle app__video__mask__circle1" />
        <div className="app__video__mask__circle app__video__mask__circle2" />
        <div className="app__video__mask__circle app__video__mask__circle3" />
        <div className="app__video__mask__triangle" />
      </div>
    );
  }
}
