import DS from 'ember-data';

export default DS.Model.extend({
  creator: DS.attr(),
  blurb: DS.attr(),
  entry: DS.belongsTo('entry', { async: true })
});
