var app = angular.module('viperdev', [])
app.controller('Data', ['$http', function($http , $scope){
	self = this;
	self.profile = [

		{
			"name" : "Mischa Krüger",
			"id" : "@Makman2",
			"picture" : "",
			"bio": ""
		},
	
		{
			"name" : "Lasse Schuirmann",
			"id" : "@sils",
			"picture" : "",
			"bio": ""
		},

		

		{
			"name" : "",
			"id" : "@sims1253",
			"picture" : "",
			"bio": ""
		},

		{
			"name" : "Hemang Kumar",
			"id" : "@hemangsk",
			"picture": "",
			"bio" : ""
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