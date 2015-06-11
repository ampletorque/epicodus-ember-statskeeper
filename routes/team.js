var teamModel;

StatsKeeper.TeamRoute = Ember.Route.extend({
  model: function(params) {
      teamModel = this.store.find('team', params.team_id);
    return this.store.find('team', params.team_id);
  }
})
