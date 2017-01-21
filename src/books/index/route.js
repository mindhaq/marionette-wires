import {Route} from 'backbone-routing';
import {history} from 'backbone';
import storage from '../storage';

export default Route.extend({
  initialize() {
    this.listenTo(this, 'enter', this.onEnter);
  },

  fetch() {
    return storage.findAll({ajaxSync: true}).then(collection => {
      this.collection = collection;
    });
  },

  onEnter() {
    let id = this.collection.first().get('id');
    history.navigate(`books/${id}`, {
      trigger: true,
      replace: true
    });
  }
});
