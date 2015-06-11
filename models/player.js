StatsKeeper.Player = DS.Model.extend({
  name: DS.attr(),
  shots: DS.attr(), //array of booleans
  points: DS.attr(),
  successes: DS.attr(),
  misses: DS.attr(),
  steam: DS.belongsTo('team', {async: true}),
  //Computed Properties attempt
  // baskets: function() {
  //   var shotcount = this.get('shots');
  //   var count = 0;
  //   for(var i = 0; i < shotcount.length; i++) {
  //     if(shotcount[i]) {
  //       count++;
  //     }
  //   }
  //   return count;
  // }.property('shots'),
  // misses: function() {
  //   var shotcount = this.get('shots');
  //   var count = 0;
  //   for(var i = 0; i < shotcount.length; i++) {
  //     if(!shotcount[i]) {
  //       count++;
  //     }
  //   }
  //   return count;
  // }.property('shots'),

  isHighScorer: function() {
      var thisTeam = this.get('steam');
      var highsc = thisTeam.get('highScorer') || "fdsaf";
      console.log(thisTeam.get('highScorer').get('name'));
      var teamHighScorer = thisTeam.get('highScorer');
      if(teamHighScorer.get('id') === this.get('id')) {
          return true;
      } else {
          return false;
      }
  }.property('steam'),

});
