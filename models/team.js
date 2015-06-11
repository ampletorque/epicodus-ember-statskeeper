StatsKeeper.Team = DS.Model.extend({
  name: DS.attr(),
  players: DS.hasMany('player', {async: true}),
  score: function() {
      var score = 0;
      var playerish = this.get('players');
      playerish.forEach(function(playa) {
         score += playa.get('points');
      });
      return score;
  }.property("players"),

});


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
