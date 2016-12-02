import {View} from 'backbone.marionette';
import template from './template.hbs';

export default View.extend({
  template: template,
  modelEvents: {
    all: 'render'
  }
});
