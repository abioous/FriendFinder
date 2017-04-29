var path = require('path')
var friends = require('../data/friends.js');



//sort by difference
function sortByDifference(candidates) {
	for(var i = 0;i<candidates.length -1;i++) {
		for(var j = i+1;j<candidates.length;j++) {
			if(candidates[i].difference > candidates[j].difference) {
				var temp = candidates[i];
				candidates[i] = candidates[j];
				candidates[j] = temp;
			}
		}
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
	
		//do not compare the same profile, assuming name is unique
		if(candidate.name == target.name) {
			continue;
		}

		var profileDifference = 0;
		//sum difference for each score between target profile and candidate score
		for(var j = 0;j<target['scores[]'].length;j++) {
			profileDifference += Math.abs((target['scores[]'][j] -  candidate.scores[j]))
		}
		//add candidate with score difference
		candidateDifference.push({
			difference:profileDifference, 
			candidate:candidate
		})
	}
	//order  candidate by lowesr difference to highest
	sortByDifference(candidateDifference);
	//take the lowest difference candidate as the matcg
	return candidateDifference[0].candidate;
}

module.exports = function(app) {

	//match api/friends url and get http method with list of friends
	app.get('/api/friends', function(req, res) {
    	res.json(friends);
	});


	//match the following url and POST with this handler
	app.post('/api/friends', function(req, res) {
		

		var matched = matchProfile(req.body,friends)
		
		//add the current profile to the subsequent call matching
		friends.push(
			{	
				name:req.body.name,
				photo:req.body.photo,
				scores:req.body['scores[]']
			}
		);
		//build response with matched profile details
		var response = {name:matched.name,photo:matched.photo}
		res.json(response);

	});


}