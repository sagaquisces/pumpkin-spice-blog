import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    updateComment(comment) {
      var params = {
        creator: this.get('creator'),
        blurb: this.get('blurb')
      };
      this.set('updateCommentForm', false);
      this.sendAction('updateComment', comment, params)
    }
  }
});
