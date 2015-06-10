StatsKeeper.PlayerController = Ember.ObjectController.extend({
  needs: ['player'],

  actions: {
    success: function() {
      var player = this.get('controllers.player.model');
      player.get('shots').pushObject(true);
      var successes = player.get('baskets');
      alert(" successes: " + successes);
      // var successes = player.get('successes');
      // player.set('successes', successes+1);
      // player.set('points', ((successes+1)*2));
      player.save();
      // StatsKeeper.reset();
      this.transitionToRoute('player', player.id);
    },
    miss: function() {
      var player = this.get('controllers.player.model');
      var misses = player.get('misses');
      // var fails = player.get('fails');
      // player.set('fails', fails+1);
      player.get('shots').pushObject(false);
      player.save();
    }
  }
});
