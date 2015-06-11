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
      var playerz = this.get('players');
      var highscore = 0;
    //   if (typeof highscore == 'undefined') { highscore = 0; };

      playerz.forEach(function(play) {
          if (play.get('points') > highscore) {
              playstah = play;
            //   console.log(highscore);
              highscore = playstah.get('points');
            //   console.log(playstah);
            //   console.log(highscore);
            //   console.log(playstah.get('points'));

          }
      })
    //   alert(playstah.get('points'));
      return playstah;
  }.property("players"),

});
