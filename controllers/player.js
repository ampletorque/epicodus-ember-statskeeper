StatsKeeper.PlayerController = Ember.ObjectController.extend({
  needs: ['player'],
  actions: {
    success: function() {
      var player = this.get('controllers.player.model');
      player.get('shots').pushObject(true);
      player.save();
    },
    miss: function() {
      var player = this.get('controllers.player.model');
      player.get('shots').pushObject(false);
      player.save();
    }
  }
});
