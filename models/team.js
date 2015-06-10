StatsKeeper.Team = DS.Model.extend({
  name: DS.attr(),
  score: DS.attr(),
  players: DS.hasMany('player', {async: true})
});
