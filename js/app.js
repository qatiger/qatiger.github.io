(function(){
	'use strict';

	angular
		.module('uumaiApp',['ngRoute'])
		.config(config);
    
	function config($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				resolve:{
					changeStyle: function($q) {
						var delay = $q.defer();
						delay.resolve();
						$('.active').removeClass("active");
						$('#mainBig').addClass("active");
						$('#main').addClass("active");
						$('#nagShow').show();
						return delay.promise;
					  }
				}
			})
			.when('/iostiger', {
				templateUrl: 'views/iostiger.html',
				resolve:{
					changeStyle: function($q) {
						var delay = $q.defer();
						delay.resolve();
						$('.active').removeClass("active");
						$('#iostiger').addClass("active");
						$('#nagShow').hide();
						return delay.promise;
					  }
				}
			})
			.when('/androidtiger', {
				templateUrl: 'views/androidtiger.html',
				resolve:{
					changeStyle: function($q) {
						var delay = $q.defer();
						delay.resolve();
						$('.active').removeClass("active");
						$('#androidtiger').addClass("active");
						$('#nagShow').hide();
						return delay.promise;
					  }
				}
			})
			.when('/contact', {
				templateUrl: 'views/contact.html',
				resolve:{
					changeStyle: function($q) {
						var delay = $q.defer();
						delay.resolve();
						$('.active').removeClass("active");
						$('#contact').addClass("active");
						$('#nagShow').hide();
						return delay.promise;
					  }
				}
			})
			.when('/buy', {
				templateUrl: 'views/buy.html',
				resolve:{
					changeStyle: function($q) {
						var delay = $q.defer();
						delay.resolve();
						$('.active').removeClass("active");
						$('#mainBig').addClass("active");
						$('#buy').addClass("active");
						$('#nagShow').show();
						return delay.promise;
					  }
				}
			})
			.when('/features', {
				templateUrl: 'views/features.html',
				resolve:{
					changeStyle: function($q) {
						var delay = $q.defer();
						delay.resolve();
						$('.active').removeClass("active");
						$('#mainBig').addClass("active");
						$('#features').addClass("active");
						$('#nagShow').show();
						return delay.promise;
					  }
				}
			})
			.when('/help', {
				templateUrl: 'views/help.html',
				resolve:{
					changeStyle: function($q) {
						var delay = $q.defer();
						delay.resolve();
						$('.active').removeClass("active");
						$('#mainBig').addClass("active");
						$('#help').addClass("active");
						$('#nagShow').show();
						return delay.promise;
					  }
				}
			})
			.when('/download', {
				templateUrl: 'views/download.html',
				resolve:{
					changeStyle: function($q) {
						var delay = $q.defer();
						delay.resolve();
						$('.active').removeClass("active");
						$('#mainBig').addClass("active");
						$('#download').addClass("active");
						$('#nagShow').show();
						return delay.promise;
					  }
				}
			})
			.when('/partners', {
				templateUrl: 'views/partners.html',
				resolve:{
					changeStyle: function($q) {
						var delay = $q.defer();
						delay.resolve();
						$('.active').removeClass("active");
						$('#partners').addClass("active");
						$('#nagShow').hide();
						return delay.promise;
					  }
				}
			})
			.otherwise({ redirectTo: '/' });
	};
})();
