import {Route} from 'marionette.routing';
import View from './view';
import storage from '../storage';

export default Route.extend({
  activate(transition) {
    return storage.find(+transition.params.colorid).then(model => {
      this.model = model;
    });
  },

  viewClass: View,

  viewOptions() {
    return {
      model: this.model
    }
  }
});
