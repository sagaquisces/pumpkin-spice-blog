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

    saveComment(params, clickedEntry) {
      var newComment = this.store.createRecord('comment', params);
      var entry = clickedEntry;
      entry.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return entry.save();
      });
      this.transitionTo('index');
    },

    update(entry, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          entry.set(key,params[key]);
        }
      });
      entry.save();
      this.transitionTo('index');
    },
    destroyEntry(entry) {
      entry.destroyRecord();
      this.transitionTo('index');
    }
  }
});
