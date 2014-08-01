/*******************************************************************************
    test-controller.js
    
    This file is loaded by test-module.js. This is the Angular controller for
    our test module.
*******************************************************************************/

// Require only Angular
define(['angular'], function (angular) {
    
    // Create our controller in its own Angular module, per the large
    // application guidelines in https://docs.angularjs.org/guide/module
    var testControllerModule = angular.module('testController', [])
        // Create the Angular controller
        .controller('HelloController', function () {

            // The following is example code so that our controller has
            // something to do

            // Log a message
            console.log('HelloController in test-controller.js loaded');

            // Initialize our someText variable so it starts with a value
            this.someText = 'Your Name Here';

        });

    return testControllerModule;
    
});