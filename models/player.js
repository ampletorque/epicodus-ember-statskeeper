StatsKeeper.Player = DS.Model.extend({
  name: DS.attr(),
  shots: DS.attr(), //array of booleans
  points: DS.attr(),
  successes: DS.attr(),
  fails: DS.attr(),
  Team: DS.belongsTo('team', {async: true})
});
