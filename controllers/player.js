StatsKeeper.PlayerController = Ember.ObjectController.extend({
 needs: ['team'],

  actions: {
    success: function() {
    //   alert(this.get('name'));
    // var player = this.store.find();

    // alert(player.name);
      this.get('shots').pushObject(true);
    //   var successes = player.get('baskets');
    //   alert(" successes: " + successes);
      var successes = this.get('successes');
      var points = (successes+1)*2;
      this.set('successes', successes+1);
      this.set('points', points);
      this.get('model').save();

      var team = this.get('controllers.team.model');
// alert(team.get('name'));

    //   var newteam = this.get('controllers.team.model');
    //   var score = newteam.get('score');
    //   newteam.set('score', score+points);

    },
    miss: function() {
      var player = this.get('controllers.player.model');
      var misses = player.get('misses');
      var fails = player.get('fails');
      player.set('fails', fails+1);
      player.get('shots').pushObject(false);
      player.save();
    }
  }
});
