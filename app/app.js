/*******************************************************************************
    app.js
    
    This file defines our base application module. In this example app, this
    file defines a base module, a MainController, and some routing.
*******************************************************************************/

// Inject Angular, and any app modules here. This is where we send in our test
// module.
define(['angular', 'test/test-module'], function (angular) {

    // Define our base application Angular module, and pass in its dependenices 
    var app = angular.module('app', ['test', 'ngRoute', 'ngAnimate'])

        // Create a MainController (this is mostly just as an example)
        .controller('MainController', function () {
            console.log('MainController in app.js loaded');
        })

        // Configure some routes
        .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
                $routeProvider
                    // This defines a single route, which loads our test module
                    .when('/Mods/Test', {
                        templateUrl: 'test/test.html',  // Load this route's template
                        controller: 'HelloController',  // This sets which controller to hook to
                        controllerAs: 'hello'  // Give that controller an alias
                    });
            }
        ]);

    return app;

});