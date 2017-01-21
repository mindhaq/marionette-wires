import {Route} from 'marionette.routing';

export default Route.extend({
  childRoutes: {
    colors: function () {
      return new Promise(function (resolve) {
        require.ensure([], function () {
          let ColorsRoute = require('../colors/route').default;
          resolve(ColorsRoute)
        })
      });
    }
  }
});