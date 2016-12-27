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
			"title" : "Code Quality Workshop",
			"subtitle": "Level up your team - reduce downtimes!",
			"features" : [
				"Learn practically about git, continuous integration and code review",
				"Define a development workflow with and for your teams",
				"Lock out bad code despite practical restrictions"
			],
			"duration": "5-8 hours",
			"price": "2000eur"	
		},
		{
			"title" : "Roadmap Session",
			"subtitle": "Plan your project/engagement",
			"features" : [
				"Access our domain experience about code quality, development processes and open source",
				"Brainstorm your problems",
				"Evaluate possible solutions, their gains and risks",
				"Get a roadmap for every solution including implementation options"
			],
			"duration": "2-8 hours",
			"price": "500-1600eur"
		},
		{
			"title" : "Enhance your Code Quality",
			"subtitle": "We work with your teams to implement new policies",
			"features" : [
				"Get rid of downtimes",
				"Get cleaner and more stable code",
				"Best combined with a Roadmap Session and/or a Code Quality Workshop"
			],
			"duration": "1-4 weeks",
			"price": "Price on request"	
		},
		{
			"title" : "Boost your Open Source Project",
			"subtitle": "Partner with us to make your Open Source project a success",
			"features" : [
				"Determine if open sourcing is profitable for your project",
				"Open source a product the right way",
				"We help setting up or maintaining your project",
				"Best combined with a Roadmap Session"
			],
			"duration": "Flexible",
			"price": "Price on request"
}
	]
	


}])
