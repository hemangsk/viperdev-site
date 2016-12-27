var app = angular.module('viperdev', [])
app.controller('Data', ['$http', function($http , $scope){
	self = this;
	self.profile = [
		{
			"name" : "Lasse Schuirmann",
			"id" : "@sils",
			"picture" : "https://avatars2.githubusercontent.com/u/5716520",
			"bio": "Problem solver. Founder of coala, GitMate and viperdev and conference speaker."
		},
		{
			"name" : "Mischa Krüger",
			"id" : "@Makman2",
			"picture" : "https://avatars3.githubusercontent.com/u/6023916",
			"bio": "Code & Review Junkie. coala core developer and inventor of the open source CE3D terminal game engine."
		},
		{
			"name" : "Adhityaa Chandrasekar",
			"id" : "@adtac",
			"picture" : "https://avatars2.githubusercontent.com/u/7521600",
			"bio": "Hardcore hacker. coala core developer and creator of climate and fssb."
		},
		{
			"name" : "Maximilian Scholz",
			"id" : "@sims1253",
			"picture" : "https://avatars3.githubusercontent.com/u/6530123",
			"bio": "Community evangelist. Leader of the coala community team and creator of the LineSpots algorithm."
		},
		{
			"name" : "Hemang Kumar",
			"id" : "@hemangsk",
			"picture": "https://avatars1.githubusercontent.com/u/13018570",
			"bio" : "Frontend lover. Creates and designs web frontends with passion."
		},
                {
                        "name" : "Sebastian Latacz",
                        "id" : "@seblat",
                        "picture": "https://avatars0.githubusercontent.com/u/18051901",
                        "bio" : "Business expert. Founder of GitMate and solver of the most complicated business problems."
                }
	]
	



	self.plans = [
		{
			"title" : "Plan1",
			"features" : [
				"feature1",
				"feature2",
				"feature3"
			]	
		},
		{
			"title" : "Plan2",
			"features" : [
				"feature1",
				"feature2",
				"feature3"
			]	
		},
		{
			"title" : "Plan3",
			"features" : [
				"feature1",
				"feature2",
				"feature3"
			]	
		},
		{
			"title" : "Plan4",
			"features" : [
				"feature1",
				"feature2",
				"feature3"
			]	
}
	]
	


}])
