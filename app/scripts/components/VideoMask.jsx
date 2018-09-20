import React from 'react';
import { Player } from 'video-react';

class VideoMask extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  play = () => {
    this.setState({ active: true });
    this.player.play();
  };

  stop = () => {
    this.setState({ active: false });
    this.player.load();
  };

  render() {
    const { active } = this.state;
    return (
      <div className="app__video__mask">
        <div className="app__video__mask__button" onClick={this.play}>
          <div className="app__video__mask__circle app__video__mask__circle1" />
          <div className="app__video__mask__circle app__video__mask__circle2" />
          <div className="app__video__mask__circle app__video__mask__circle3" />
          <div className="app__video__mask__triangle" />
        </div>

        <div className={!active ? ' d-none' : ' d-flex'}>
          <div className="app__video__mask__background" />
          <div className="app__video__mask__player">
            <Player
              autoplay
              ref={(element) => this.player = element}
              src="http://media.w3.org/2010/05/bunny/movie.mp4"
            />
            <div onClick={this.stop} className="app__video__mask__player__close">
              <i className="i-close" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoMask;
