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
  highScorer: function() {
      var playstah;
      var highscore = 0;
      var playerz = this.get('players');
      playerz.forEach(function(play) {
          if (play.get('points') > highscore) {
              playstah = play;
              highscore = play.get('score');
          }
      })
      return playstah;
  }.property("players"),

});
