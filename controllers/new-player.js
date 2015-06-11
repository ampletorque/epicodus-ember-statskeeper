StatsKeeper.NewPlayerController = Ember.Controller.extend({
  needs: ['team'],
  actions: {
    save: function() {
      var player = this.store.createRecord('player', {
        name: this.get('playerName'),
        shots: [],
        points: 0,
        successes: 0,
        misses: 0

      });

      player.save();


      var team = this.get('controllers.team.model');
      team.get('players').pushObject(player);
      this.set('playerName', null);
      team.save();

      this.transitionToRoute('team', team.id);
    }
  }
});
