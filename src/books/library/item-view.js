import {View} from 'backbone.marionette';
import template from './item-template.hbs';

export default View.extend({
  template: template,
  tagName: 'a',

  attributes() {
    return {
      class : `list-group-item`,
      route : `books.show`,
      'param-bookid': `${this.model.get('id')}`
    };
  }
});
