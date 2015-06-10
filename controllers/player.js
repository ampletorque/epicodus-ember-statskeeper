StatsKeeper.Player = Ember.Object.extend({
  countBaskets: function() {
    return 5;
  }.property()
});


StatsKeeper.PlayerController = Ember.ObjectController.extend({
  needs: ['player'],

  actions: {
    success: function() {
      var player = this.get('controllers.player.model');
      var successes = player.get('countBaskets');
  alert(player.name);
      player.get('shots').pushObject(true);
      player.save();
  player.successes.pushObject('player.successes', 5);
  alert(player);
    },
    miss: function() {
      var player = this.get('controllers.player.model');
      player.get('shots').pushObject(false);
      player.save();
    }
  }
});
