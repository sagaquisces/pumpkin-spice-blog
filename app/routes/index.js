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

    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      console.log(params.blurb + "is the blurb");
      var entry = params.entry;
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
    updateComment(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key,params[key]);
        }
      });
      comment.save();
      this.transitionTo('index');
    },
    destroyEntry(entry) {
      var comment_deletions = entry.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function() {
        return entry.destroyRecord();
      });
      this.transitionTo('index');
    },
    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('index');
    }
  }
});
