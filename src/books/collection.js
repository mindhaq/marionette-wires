import {Collection} from 'backbone';
import Model from './model';

export default Collection.extend({
  url: '../api/books/fixture.json',
  model: Model
});
