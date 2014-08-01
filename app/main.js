/*******************************************************************************
    main.js
    
    This file is loaded by RequireJS in index.html, through the data-main
    attribute in the RequireJS script tag. This file configures RequireJS,
    and then calls bootstrap.js (explained below).
*******************************************************************************/

require.config({
    // Configure paths to all of the app's base script files.
    // Read more about paths configuration here: http://requirejs.org/docs/api.html#config-paths
    paths: {
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.21/angular.min',  // AngularJS
        'ngRoute': 'ng/angular-route.min',  // AngularJS route module
        'ngAnimate': 'ng/angular-animate.min',  // AngularJS animate module
        'domReady': '//cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady.min',  // RequireJS dom ready module
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery'  // jQuery
    },
    // Configure the dependencies for the Angular scripts.
    // Read more about shim configuration here: http://requirejs.org/docs/api.html#config-shim
    shim: {
        'angular': {
            deps: ['jquery'],  // Angular depends on jQuery
            // "exports" makes Angular work with RequireJS. Angular is not AMD
            // enabled, and this creates an object for RequireJS to work with.
            // See:  http://stackoverflow.com/questions/14095308/requirejs-what-is-the-purpose-of-the-exports-property-in-shim
            // And:  http://requirejs.org/docs/api.html#config-shim
            exports: 'angular'
        },
        'ngRoute': {
            deps: ['angular']  // Angular modules depend on Angular
        },
        'ngAnimate': {
            deps: ['angular']  // Angular modules depend on Angular
        }
    },
    deps: ['bootstrap']  // This auto-loads bootstrap.js (our Angular bootstrapper)
});