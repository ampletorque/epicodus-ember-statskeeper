StatsKeeper.NewTeamController = Ember.Controller.extend({
    needs: ['teams'],

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
      this.transitionToRoute('teams');
    }
  }
})
