StatsKeeper.Player = DS.Model.extend({
  name: DS.attr(),
  shots: DS.attr(), //array of booleans
  points: DS.attr(),
  successes: DS.attr(),
  misses: DS.attr(),
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
  Team: DS.belongsTo('team', {async: true})
});
