import {Route} from 'marionette.routing';
import Model from '../model';
import View from './view';
import storage from '../storage';

export default Route.extend({
  activate() {
    this.model = new Model();
    return storage.findAll().then(collection => {
      this.collection = collection;
    });
  },

  viewClass: View,

  viewOptions() {
    return {
      collection: this.collection,
      model: this.model
    }
  }
});
