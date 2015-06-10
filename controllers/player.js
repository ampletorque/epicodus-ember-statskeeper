// ignore the top section and the references to it below

StatsKeeper.Player = Ember.Object.extend({
  countBaskets: function() {
    return 5;
  }.property()
});

StatsKeeper.Player = Ember.Object.extend({
  points: function() {
    return 5;
  }.property()
});


StatsKeeper.PlayerController = Ember.ObjectController.extend({
  needs: ['player'],

  actions: {
    success: function() {
      var player = this.get('controllers.player.model');
      // var successes = player.get('countBaskets');
      var successes = player.get('successes');
      player.set('successes', successes+1);
      player.set('points', ((successes+1)*2));
      player.get('shots').pushObject(true);
      player.save();
    },
    miss: function() {
      var player = this.get('controllers.player.model');
      var fails = player.get('fails');
      player.set('fails', fails+1);
      player.get('shots').pushObject(false);
      player.save();
    }
  }
});
