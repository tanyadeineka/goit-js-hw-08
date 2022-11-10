import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function playTime(e) {
    localStorage.setItem('videoplayer-current-time', e.seconds)
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
