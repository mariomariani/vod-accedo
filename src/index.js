import angular from 'angular';

import {main} from './app/main';
import {navbar} from './app/navbar/navbar';

import {NavigationController} from './app/navigation';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.css';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .controller('NavigationController', NavigationController)
  .component('navbar', navbar)
  .component('main', main);
