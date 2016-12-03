import {Route} from 'marionette.routing';
import storage from './storage';
import LayoutView from './layout-view';

export default Route.extend({
  activate() {
    return storage.findAll().then(collection => {
      this.collection = collection;
    });
  },

  viewClass: LayoutView,

  viewOptions() {
    return {
      collection: this.collection
    }
  }
});
