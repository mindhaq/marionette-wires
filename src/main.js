import './plugins';
import $ from 'jquery';
import {createRouter, middleware} from 'marionette.routing';

import Application from './application/application';

import ModalService from './modal/service';
import HeaderService from './header/service';
import FlashesService from './flashes/service';

import IndexRoute from './index/route';

import ColorsIndexRoute from './colors/index/route';
import ColorsShowRoute from './colors/show/route';
import ColorsEditRoute from './colors/edit/route';
import ColorsCreateRoute from './colors/create/route';

import BooksRoute from './books/route';
import BooksIndexView from './books/index/view';
import BooksShowRoute from './books/show/route';

import './main.less';

let app = new Application();

ModalService.setup({
  container: app.layout.getRegion('overlay')
});

HeaderService.setup({
  container: app.layout.getRegion('header')
});

FlashesService.setup({
  container: app.layout.getRegion('flashes')
});

$(document).ajaxError(() => {
  FlashesService.request('add', {
    type: 'danger',
    title: 'Server Error'
  });
});

let router = createRouter({log: true, logError: true});

router.rootRegion = app.layout.getRegion('content');

router.map(function (route) {
  route('index', {path: '/', routeClass: IndexRoute});
  route('colors', {path: '/colors', abstract: true}, function () {
    route('colors.index', {path: '', routeClass: ColorsIndexRoute});
    route('colors.new', {path: 'new', routeClass: ColorsCreateRoute});
    route('colors.show', {path: ':colorid', routeClass: ColorsShowRoute});
    route('colors.edit', {path: ':colorid/edit', routeClass: ColorsEditRoute});
  });
  route('books', {path: '/books', routeClass: BooksRoute, abstract: true}, function () {
    route('books.index', {path: '', viewClass: BooksIndexView});
    route('books.show', {path: ':bookid', routeClass: BooksShowRoute});
  });
});

HeaderService.request('add', {
  name: 'Colors',
  path: 'colors.index',
  type: 'primary'
});

HeaderService.request('add', {
  name: 'Books',
  path: 'books.index',
  type: 'primary'
});

router.use(middleware);

router.listen();

