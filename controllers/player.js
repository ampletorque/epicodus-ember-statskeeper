StatsKeeper.PlayerController = Ember.ObjectController.extend({

  actions: {
    success: function() {
      this.get('shots').pushObject(true);
    //   var successes = player.get('baskets');
    //   alert(" successes: " + successes);
      var successes = this.get('successes');
      var points = (successes+1)*2;
      this.set('successes', successes+1);
      this.set('points', points);
      this.get('model').save();
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
