import angular from 'angular';

import {hello} from './app/hello';
import 'angular-ui-router';
import routesConfig from './routes';
import {NavigationController} from './app/navigation';

import './index.css';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .controller('NavigationController', NavigationController)
  .component('app', hello);
