import angular from 'angular';

import {main} from './app/main';
import {navbar} from './app/navbar/navbar';
import {carousel} from './app/carousel/carousel';
import {movie} from './app/movie/movie';
import {player} from './app/player/player';

import {NavigationController} from './app/navigation';
import MovieService from './app/movie/movie.service';

import 'angular-cookies';
import 'angular-ui-router';
import videojs from './video-js';
import routesConfig from './routes';

import './index.css';

export const app = 'app';

angular
  .module(app, ['ui.router', 'ngCookies', videojs])
  .config(routesConfig)
  .controller('NavigationController', NavigationController)
  .service('movieService', MovieService)
  .component('navbar', navbar)
  .component('carousel', carousel)
  .component('movie', movie)
  .component('player', player)
  .component('main', main);
