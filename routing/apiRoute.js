//Loading Dependencies
var path = require("path");

//Import friends list from the friends array
var friends = require("../app/friends.js");

//Send routes of API data to module
module.exports = function(app) {

// Total list of friend entries
app.get('/api/friends', function(req, res) {
  res.json(friends);
});

// Add new friend entry
app.post('/api/friends', function(req, res) {
  // Capture the user input object
  var userData = req.body;
  // console.log('userInput = ' + JSON.stringify(userInput));

  var userResponses = userData.scores;
  // console.log('userResponses = ' + userResponses);

  // Compute best friend match
  var friendName = '';
  var friendImage = '';
  var totalDifference = 10000; // Make the initial value big for comparison

  // Examine all existing friends in the list
  for (var i = 0; i < friends.length; i++) {
    // console.log('friend = ' + JSON.stringify(friends[i]));

    // Compute differenes for each question
    var diff = 0;
    for (var j = 0; j < userResponses.length; j++) {
      diff += Math.abs(friends[i].scores[j] - userResponses[j]);
    }
    // console.log('diff = ' + diff);

    // If lowest difference, record the friend match
    if (diff < totalDifference) {
      // console.log('Closest match found = ' + diff);
      // console.log('Friend name = ' + friends[i].friendNname);
      // console.log('Friend image = ' + friends[i].friendImage);

      totalDifference = diff;
      friendName = friends[i].name;
      friendImage = friends[i].photo;
    }
  }

  // Add new user
  friends.push(userData);

  // Send appropriate response
  res.json({status: 'OK', matchName: friendName, matchImage: friendImage});
});
};