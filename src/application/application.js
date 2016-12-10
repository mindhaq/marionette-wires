import $ from 'jquery';
import _ from 'underscore';
import Radio from 'backbone.radio';
import nprogress from 'nprogress';
import {Application} from 'backbone.marionette';
import LayoutView from './layout-view';

let routerChannel = Radio.channel('router');

nprogress.configure({
  showSpinner: false
});

export default Application.extend({
  initialize() {
    this.$body = $(document.body);
    this.layout = new LayoutView();
    this.layout.render();

    this.listenTo(routerChannel, {
      'before:transition' : this.onBeforeTransition,
      'transition'        : this.onTransition
    });
  },

  onBeforeTransition(transition) {
    transition.catch((err) => {
      if (err.type !== 'TransitionCancelled' && err.type !== 'TransitionRedirected') {
        this.onErrorRoute()
      }
    });
    this.transitioning = true;
    // Don't show for synchronous route changes
    // since marionette.routing transitions are async, all will start the progress bar
    // todo: configure for a sane default
    _.defer(() => {
      if (this.transitioning) {
        nprogress.start();
      }
    });
  },

  onTransition() {
    this.transitioning = false;
    this.$body.scrollTop(0);
    nprogress.done();
  },

  onErrorRoute() {
    this.transitioning = false;
    nprogress.done(true);
  }
});
