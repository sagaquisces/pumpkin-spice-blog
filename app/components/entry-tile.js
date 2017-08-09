import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updateEntryForm: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    update(entry, params) {
      this.sendAction('update', entry, params);
    },
    delete (entry) {
      if (confirm('Are you sure you want to delete this wonderment of blog entries?')) {
        this.sendAction('destroyEntry', entry);
      }
    }
  }
});
