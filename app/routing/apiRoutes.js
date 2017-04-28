var path = require('path')
var friends = require('../data/friends.js');



//sort by difference
function sortByDifference(candidates) {
	for(var i = 0;i<candidates.length;i++) {

	}
}

//this function matches target profile with profile candidate
//based on the smallest difference
function matchProfile(target, candidates) {
	var candidateDifference = [];


	//repeat for each candidate
	for(var i = 0;i<candidates.length;i++) {
		//take candidate
		var candidate = candidates[i];
		var profileDifference = 0;
		//sum difference for each score between target profile and candidate score
		for(var j = 0;j<target.scores.length;j++) {
			profileDifference += Math.abs((target.scores[j] -  candidate.scores[j]))
		}
		candidateDifference.push({difference:profileDifference, candidate:candidate[i]})
	}


}

module.exports = function(app) {

	//match /survey path to survey.html
	app.get('/api/friends', function(req, res) {
    	console.log('matched')
    	res.json(friends);
	});


	app.post('/api/friends', function(req, res) {
		console.log(req.body)
    	


	});


}