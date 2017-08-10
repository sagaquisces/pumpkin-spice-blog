import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      var params = {
        creator: this.get('creator'),
        blurb: this.get('blurb')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
