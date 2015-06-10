StatsKeeper.Router.map(function(){
  this.resource('teams', {path: '/'});
  this.resource('new-team');
  this.resource('team', {path: 'team/:team_id'}, function() {
    this.resource('new-player');
  });
  this.resource('player', {path: 'player/:player_id'});
});
