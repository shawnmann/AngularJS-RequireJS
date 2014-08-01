/*******************************************************************************
    bootstrap.js
    
    This file is loaded by RequireJS from main.js. This file's sole purpose is
    to bootstrap Angular. We can't use the ng-app attribute to attach our
    Angular app because we want to use Require, so we have to bootstrap it.
    Read more here:  https://docs.angularjs.org/guide/bootstrap
*******************************************************************************/

// Use Require to inject all the scripts we need for the app
require(['angular', 'domReady', 'ngRoute', 'ngAnimate', 'app'], function (angular, domReady) {

    // Use domReady to bootstrap Angular only after the, wait for it, dom is ready!
    domReady(function () {

        // The actual Angular bootstrapping code. We tell Angular that the module
        // named "app", which is defined in app.js is our base application module.
        angular.bootstrap(document, ['app']);

    });

});