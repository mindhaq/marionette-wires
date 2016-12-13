import {Route} from 'marionette.routing';
import storage from './storage';
import LayoutView from './layout-view';

export default Route.extend({
  activate(transition) {
    if (this.previousRoute) {
      transition.redirectTo(this.previousRoute.name, this.previousRoute.params, this.previousRoute.query)
      return
    }
    return storage.findAll({ajaxSync: true}).then(collection => {
      this.collection = collection;
    });
  },

  deactivate(transition) {
    let prevRoutes = transition.prev.routes;
    this.previousRoute = prevRoutes[prevRoutes.length - 1]
  },

  viewClass: LayoutView,

  viewOptions() {
    return {
      collection: this.collection
    }
  }
});
