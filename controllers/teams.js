StatsKeeper.TeamsController = Ember.ArrayController.extend({
  actions: {
    sortByName: function() {
      this.set('sortProperties', ['name']);
    }
  }
});
