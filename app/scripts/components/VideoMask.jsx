import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const VideoMask = () => (
  <div className="app__video__mask">
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <div className="app__video__mask__circle app__video__mask__circle1" />
      <div className="app__video__mask__circle app__video__mask__circle2" />
      <div className="app__video__mask__circle app__video__mask__circle3" />
      <div className="app__video__mask__triangle" />
    </ScrollAnimation>
  </div>
);

export default VideoMask;
