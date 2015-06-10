StatsKeeper.TeamsController = Ember.ArrayController.extend({
  actions: {
    sortByTeam: function() {
      this.set('sortProperties', ['name']);
    }
  }
});
