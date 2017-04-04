import angular from 'angular';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const videojsModule = 'video-js';

angular
  .module(videojsModule, [])
  .constant('videojs', videojs);

export default videojsModule;
