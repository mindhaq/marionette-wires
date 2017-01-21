import _ from 'lodash';
import Router from '../common/router';
import Radio from 'backbone.radio';

import IndexRoute from './index/route';
import CreateRoute from './create/route';
import ShowRoute from './show/route';
import EditRoute from './edit/route';

export default Router.extend({
  channelName: 'header',
  
  initialize(options) {
    this.container = options.container;
    
    this.channel = Radio.channel(_.result(this, 'channelName'));
    this.channel.request('add', {
    //Radio.request('header 'add', {
      name: 'Colors',
      path: 'colors',
      type: 'primary'
    });
  },

  onBeforeEnter() {
    //Radio.request('header', 'activate', { path: 'colors' });
    this.channel.request( 'activate', { path: 'colors' });
  },

  routes: {
    'colors'          : 'index',
    'colors/new'      : 'create',
    'colors/:id'      : 'show',
    'colors/:id/edit' : 'edit'
  },

  index() {
    return new IndexRoute({
      container: this.container
    });
  },

  create() {
    return new CreateRoute({
      container: this.container
    });
  },

  show() {
    return new ShowRoute({
      container: this.container
    });
  },

  edit() {
    return new EditRoute({
      container: this.container
    });
  }
});
