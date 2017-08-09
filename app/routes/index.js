import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('entry');
  },

  actions: {
    saveEntry3(params) {
      var newEntry = this.store.createRecord('entry', params);
      newEntry.save();
      this.transitionTo('index');
    },

    destroyEntry(entry) {
      entry.destroyRecord();
      this.transitionTo('index');
    }
  }
});
