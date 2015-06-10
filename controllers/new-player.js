StatsKeeper.NewPlayerController = Ember.Controller.extend({
  needs: ['team'],
  actions: {
    save: function() {
      var player = this.store.createRecord('player', {
        name: this.get('playerName'),
        shots: [false, true],
        points: 0
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
