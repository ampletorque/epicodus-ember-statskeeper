StatsKeeper.NewTeamController = Ember.Controller.extend({
  needs: ['teams'],
  // needs: ['teams', 'players'],
  actions: {
    save: function() {
      var newTeam = this.store.createRecord('team', {
        name: this.get('name'),
        score: 0
      });

      newTeam.save();

      var team = this.get('controllers.teams.model');

    //   alert("outside: " + team.get('score'));
      this.set('name', null);

    //   var playerz = this.get('controllers.players.model');
    //   var player = playerz.store.createRecord('player', {
    //     name: "There are no high scorers yet.",
    //     shots: [],
    //     points: 0,
    //     successes: 0,
    //     misses: 0
    // });
        // player.save();

      this.transitionToRoute('teams');
    }
  }
})
