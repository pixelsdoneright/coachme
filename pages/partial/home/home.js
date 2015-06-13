angular.module('pages').controller('HomeCtrl',function($scope, $location){

	$scope.search = function(searchtext) {
		console.log(searchtext);
		$location.path('/search/' + searchtext + '');
	}


	var namearr=["Soccer", "Swimming","Baseball", "Basketball", "Running", "Tennis"];
	

	
	setInterval(function (){
			$.each(namearr,function(id,val){
				$('.herotxt').fadeOut().queue(
				function(){
				$('.herotxt').text(namearr[id]);
				$(this).dequeue();
				});
				$(".herotxt").fadeIn();
			});
		}, 5000);

	$scope.populars = [
	{
		"id":1,
		"sport":"soccer",
		"count":46,
		"specialities":"Zone defense, Two-touch, Throwing-in, Through Ball, Corner Kicks, Crossing, Dribbling, First Touch, Free Kicks"
	},{
		"id":2,
		"sport":"tennis",
		"count":23,
		"specialities":"Forehand, Groundstrokes, Serve, Tennis Etiquette, Backhand, Slice, Topspin"
	},{
		"id":3,
		"sport":"swimming",
		"count":25,
		"specialities":"Backstroke, Backstroke flipturns, Breaststroke, Butterfly, Flip Turns, Freestyle, Hand position Open turns, Relay starts, Sprinting"
	},{
		"id":4,
		"sport":"basketball",
		"count":67,
		"specialities":"Footwork, Dribbling, Defense, Transition Offense, Shooting, Rebounding"
	},{
		"id":5,
		"sport":"baseball",
		"count":34,
		"specialities":"Pitching, Throwing, Hitting, Batting, Hit And Run, Suicide bunt, Stealing, Sliding, Safety bunt"
	},{
		"id":5,
		"sport":"triathlon",
		"count":41,
		"specialities":"Transitioning, Training, Race Day, Pacing, Injury Prevention, Drafting, Breathing"
	}]
});