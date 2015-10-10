console.log("Hello World");

if(Meteor.isClient){
  //console.log("Hello Client");
  // create helper functions
  Template.leaderboard.helpers({
    'player' : function(){
      return PlayersList.find();
    },
    'otherHelperFunction' : function () {
      return "Some other function";
    }
  });
}

if (Meteor.isServer) {
  //console.log("Hello Server");
}
// create a new collection/table of players
// not using the var keyword makes PlayersList Global variable
PlayersList = new Mongo.Collection('players');
