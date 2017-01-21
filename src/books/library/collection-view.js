import {CollectionView} from 'backbone.marionette';
import ItemView from './item-view';
import {RouterLink} from 'marionette.routing';

export default CollectionView.extend({
  className: 'list-group',
  childView: ItemView,

  behaviors: [RouterLink]
});
