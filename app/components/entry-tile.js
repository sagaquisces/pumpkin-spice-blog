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
    updateEntryForm() {
      this.set('updateEntryForm', true);
    },
    update(entry) {
      var params = {
        author: this.get('author'+entry.id),
        title: this.get('title'+entry.id),
        content: this.get('content'+entry.id),
        image: this.get('image'+entry.id),
      };
      this.sendAction('update', entry, params);
      this.set('updateEntryForm', false);
    },
    delete (entry) {
      if (confirm('Are you sure you want to delete this wonderment of blog entries?')) {
        this.sendAction('destroyEntry', entry);
      }
    }
  }
});
