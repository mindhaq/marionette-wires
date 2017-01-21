import {View} from 'backbone.marionette';
import template from './layout-template.hbs';
import LibraryView from './library/collection-view';

export default View.extend({
  template: template,
  className: 'container',
  regions: {
    library : '.books__library',
    outlet  : '.books__viewer'
  },
  onRender() {
    this.showChildView('library', new LibraryView({collection: this.collection}))
  }
});
