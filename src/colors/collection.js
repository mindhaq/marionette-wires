import Backbone from 'backbone';
import Model from './model';

export default Backbone.Collection.extend({
  url: '../api/colors/fixture.json',
  localStorage: Model.prototype.localStorage,
  model: Model
});
