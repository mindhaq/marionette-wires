import {View} from 'backbone.marionette';
import nprogress from 'nprogress';
import ModalService from '../../modal/service';
import FlashesService from '../../flashes/service';
import template from './template.hbs';
import Radio from 'backbone.radio';

export default View.extend({
  template: template,
  className: 'colors colors--show container',

  initialize(options = {}) {
    this.model = options.model;
  },

  templateContext() {
    return {
      errors: this.model.validationError
    };
  },

  events: {
    'click .colors__toggle' : 'handleToggle',
    'click .colors__destroy' : 'handleDestroy'
  },

  modelEvents: {
    all: 'render'
  },

  handleToggle() {
    this.model.set('active', !this.model.get('active'));
    this.model.save().fail(() => this.handleToggleFailure());
  },

  handleToggleFailure() {
    this.model.set('active', this.model.previous('active'));
  },

  handleDestroy() {
    ModalService.request('confirm', {
      title : 'Confirm Color Destruction',
      text  : `Are you sure you want to destroy ${this.model.get('name')}?`
    }).then(confirmed => {
      if (!confirmed) {
        return;
      }

      nprogress.start();

      return this.model.destroy({ wait: true })
        .then(() => this.handleDestroySuccess());
    });
  },

  handleDestroySuccess() {
    Radio.channel('router').request('transitionTo', 'colors.index');
    FlashesService.request('add', {
      timeout : 5000,
      type    : 'info',
      title   : `It's gone!`,
      body    : `You have deleted ${this.model.get('name')}.`
    });
  }
});
