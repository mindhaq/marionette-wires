import {Route} from 'marionette.routing';
import View from './view';
import HeaderService from '../header/service';

export default Route.extend({
  viewClass: View,

  activate() {
    HeaderService.request('activate', {
      path: ''
    });
  }
});
