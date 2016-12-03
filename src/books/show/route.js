import {Route} from 'marionette.routing';
import ViewerView from '../viewer/view';
import storage from '../storage';

export default Route.extend({
  activate(transition) {
    return storage.findAll().then(collection => {
      this.collection = collection;
      this.model = this.collection.get(+transition.params.bookid);
      this.collection.active = this.model;
    });
  },

  viewClass: ViewerView,

  viewOptions() {
    return {
      model: this.model
    }
  }
});
