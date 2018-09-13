import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import { Player, ControlBar, CurrentTimeDisplay, DurationDisplay, TimeDivider, VolumeMenuButton, BigPlayButton } from 'video-react';

const CustomVideo = ({ poster, src }) => (
  <div className="app__video">
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <Player
        poster={require(`assets/media/images/${poster}`)}
        src={src}
      >
        <BigPlayButton position="center" />
        <ControlBar>
          <CurrentTimeDisplay order={6.1} />
          <TimeDivider order={6.2} />
          <DurationDisplay order={6.3} />
          <VolumeMenuButton order={7.1} />
        </ControlBar>
      </Player>
    </ScrollAnimation>
  </div>
);


CustomVideo.propTypes = {
  poster: PropTypes.string,
  src: PropTypes.string.isRequired,
};

CustomVideo.defaultProps = {
  poster: 'video.png',
};

export default CustomVideo;
