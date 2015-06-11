StatsKeeper.NewTeamController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newTeam = this.store.createRecord('team', {
        name: this.get('name'),
      });
      this.set('score', 0);
      this.set('players', []);
      newTeam.save();
      this.set('name', null);
      this.transitionToRoute('teams');
    }
  }
})
