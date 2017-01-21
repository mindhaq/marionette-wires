import {Route} from 'marionette.routing';
import ColorsIndexRoute from './index/route';
import ColorsShowRoute from './show/route';
import ColorsEditRoute from './edit/route';
import ColorsCreateRoute from './create/route';

export default Route.extend({
  childRoutes: {
    'colors.index': ColorsIndexRoute,
    'colors.show': ColorsShowRoute,
    'colors.edit': ColorsEditRoute,
    'colors.create': ColorsCreateRoute
  }
});

