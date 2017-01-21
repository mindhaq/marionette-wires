import {Route} from 'marionette.routing';
import LayoutView from './layout-view';
import storage from '../storage';

export default Route.extend({
  activate(transition) {
    let pageParam = transition.query.page;
    this.page = pageParam && parseFloat(pageParam) || 1;
    return storage.findAll({ajaxSync: true}).then(collection => {
      this.collection = collection;
    });
  },

  updateView(transition) {
    let pageParam = transition.query.page;
    let page = pageParam && parseFloat(pageParam) || 1;
    this.view.updateState({page: page});
    return true
  },

  viewClass: LayoutView,

  viewOptions: function () {
    return {
      collection: this.collection,
      page: this.page
    }
  }
});
