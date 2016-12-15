import _ from 'underscore';
import {View} from 'backbone.marionette';
import CollectionView from './collection-view';
import FooterView from './footer-view';
import {Collection} from 'backbone';
import template from './layout-template.hbs';

export default View.extend({
  template: template,
  className: 'colors colors--index container',

  regions: {
    list: '.colors__list',
    footer: '.colors__footer'
  },

  initialize(options = {}) {
    this.state = { start: 0, limit: 20 };
    this.state.start = (options.page - 1) * this.state.limit;
  },

  onBeforeRender() {
    let filtered = this.getFilteredModels();

    this.filteredCollection = new Collection(filtered);
  },

  onRender() {
    let footerView = new FooterView({
      collection: this.collection,
      state: this.state
    });

    this.collectionView = new CollectionView({
      collection: this.filteredCollection
    });

    this.getRegion('list').show(this.collectionView);
    this.getRegion('footer').show(footerView)
  },

  getFilteredModels() {
    return _.chain(this.collection.models)
      .drop(this.state.start)
      .take(this.state.limit)
      .value();
  },

  updateState(options) {
    this.state.start = (options.page - 1) * this.state.limit;
    let filtered = this.getFilteredModels();
    this.filteredCollection.reset(filtered);
    this.getRegion('footer').currentView.render();
  }
});
