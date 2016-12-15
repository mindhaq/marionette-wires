import _ from 'underscore';
import {View} from 'backbone.marionette';
import template from './footer-template.hbs';

export default View.extend({
  template: template,
  initialize(options) {
    this.state = options.state
  },

  templateContext() {
    let total   = Math.ceil(this.collection.length / this.state.limit);
    let current = Math.ceil(this.state.start / this.state.limit) + 1;

    let pages = _.times(total, index => {
      return {
        current : index + 1 === current,
        page    : index + 1
      };
    });

    let prev = current - 1 > 0 ? current - 1 : false;
    let next = current < total ? current + 1 : false;

    return { total, current, pages, prev, next };
  }
})
