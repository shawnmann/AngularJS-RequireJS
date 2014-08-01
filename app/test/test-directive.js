/*******************************************************************************
    test-directive.js
    
    This file is loaded by test-module.js. This is an example directive
    bundled with our module. We don't actually use this directive in
    this app, so this is just for more reference. For more info on Angular 
    directives, see:  https://docs.angularjs.org/guide/directive
*******************************************************************************/

// Require only Angular
define(['angular'], function (angular) {

    // Create our directive in its own Angular module, per the large
    // application guidelines in https://docs.angularjs.org/guide/module
    var testDirectiveModule = angular.module('testDirective', [])
        // Create the Angular directive
        .directive('helloWorld', function () {
            return {
                restrict: 'E',  // This is an Element directive
                templateUrl: 'test/test.html'  // Set the template location
            };
        });

    return testDirectiveModule;

});