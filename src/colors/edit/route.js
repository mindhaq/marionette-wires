import {Route} from 'marionette.routing';
import View from './view';

export default Route.extend({

  viewClass: View,

  viewOptions() {
    return {
      model: this.getContext().request('colorModel')
    }
  }
});
