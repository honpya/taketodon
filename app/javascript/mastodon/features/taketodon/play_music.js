import React from 'react';

export default class PlayMusic extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false;
    };
  }

  handleClick = () => {
    this.isPlaying() ? this.stopMusic() : this.playMusic()
    this.setState({ isPlaying: this.isPlaying() })
  }

  playMusic = () => {
    music.play()
  }

  stopMusic = () => {
    music.pause()
  }

  isPlaying = () => {
    if (typeof music === 'undefined') {
      return false
    }
    return !music.paused
  }

  iconStyle = () => {
    return this.state.isPlaying ? 'fa-volume-up' : 'fa-volume-off'
  }

  componentDidMount () {
    this.attachListeners()
  }

  componentWillUnmount () {
    this.removeListeners()
  }

  handleFinishedMusic = () => {
    this.setState({ isPlaying: false })
  }

  attachListeners () {
    if (typeof music !== 'undefined') {
      music.addEventListener('ended', this.handleFinishedMusic, false)
    }
  }

  removeListeners () {
    if (typeof music !== 'undefined') {
      music.removeEventListener('ended', this.handleFinishedMusic, false)
    }
  }

  render () {
    const today = new Date()
    if (today.getMonth() + 1 !== 1 || today.getDate() > 3) {
        return null;
    }
    return (
      <div>
        <audio id='music' name='music' preload='auto' volume='0.1'>
          <source src={this.props.path} />
        </audio>
        <button className='icon-button' onClick={this.handleClick}>
          <i className={`fa fa-fw ${this.iconStyle()}`} aria-hidden='true'/>
        </button>
      </div>
    )
  }
}
