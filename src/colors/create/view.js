import nprogress from 'nprogress';
import {View} from 'backbone.marionette';
import FormBehavior from '../../forms/behavior';
import template from './template.hbs';
import storage from '../storage';
import Radio from 'backbone.radio';

export default View.extend({
  template: template,
  className: 'colors colors--create container',

  behaviors: {
    form: { behaviorClass: FormBehavior }
  },

  templateContext() {
    return {
      errors: this.errors
    };
  },

  events: {
    'submit form': 'handleSubmit'
  },

  handleSubmit() {
    let errors = this.model.validate(this.form);

    if (errors) {
      this.errors = errors;
      this.render();
    } else {
      nprogress.start();
      this.model.set(this.form);
      storage.save(this.model).then(() => {
        Radio.channel('router').request('transitionTo', 'colors.index');
      });
    }
  }
});
