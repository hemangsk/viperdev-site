var app = angular.module('viperdev', [])
app.controller('Data', ['$http', function($http , $scope){
	self = this;
	self.profile = [

		{
			"name" : "Mischa Krüger",
			"id" : "@Makman2",
			"picture" : "https://avatars3.githubusercontent.com/u/6023916",
			"bio": ""
		},
	
		{
			"name" : "Lasse Schuirmann",
			"id" : "@sils",
			"picture" : "https://avatars2.githubusercontent.com/u/5716520",
			"bio": ""
		},

		

		{
			"name" : "",
			"id" : "@sims1253",
			"picture" : "https://avatars3.githubusercontent.com/u/6530123",
			"bio": ""
		},

		{
			"name" : "Hemang Kumar",
			"id" : "@hemangsk",
			"picture": "https://avatars1.githubusercontent.com/u/13018570",
			"bio" : "Newbie in the team. Loves meeting new people. Wants to be a 'code Handyman'."
		}
	]
	if(self.prof == null){

		$http.get("https://api.github.com/orgs/viper-development/members")
		.then(function (data) {
			self.prof = data["data"]
			console.log(self.prof);

			angular.forEach(data["data"], function(value){
						$http.get(value["url"])
						.then(function (user_data) {
							value["user_data"] = user_data["data"]
						})
					});


		})
	}
	


}])