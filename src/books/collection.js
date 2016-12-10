import Backbone from 'backbone';
import Model from './model';

export default Backbone.Collection.extend({
  url: '../api/books/fixture.json',
  localStorage: new Backbone.LocalStorage('books'),
  model: Model
});
