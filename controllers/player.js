StatsKeeper.PlayerController = Ember.ObjectController.extend({


  actions: {
    success: function() {
      this.get('shots').pushObject(true);
    //   var successes = player.get('baskets');
    //   (" successes: " + successes);
      var successes = this.get('successes');
      var points = (successes+1)*2;
      this.set('successes', successes+1);
      this.set('points', points);
      this.get('model').save();
    },
    miss: function() {
      this.get('shots').pushObject(false);
      var misses = this.get('misses');
      this.set('misses', misses+1);
      this.get('model').save();
    }
  }
});
