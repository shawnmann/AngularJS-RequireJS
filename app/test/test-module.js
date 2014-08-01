/*******************************************************************************
    test-module.js
    
    This file is loaded in app.js. This file binds/collects all the components
    of this module together in one place, so that the app only has to load/call
    one module file and its template, instead of each module file individually.
    The loading of the module is handled in app.js.
*******************************************************************************/

// Require Angular and all of the module's components. This is where we would
// include controllers, directives, services, etc. This file just bundles
// everything together so we can deliver it easily.
define(['angular', 'test/test-controller', 'test/test-directive'], function (angular) {

    // Create our test module's Angular module, and inject its components.
    var testModule = angular.module('test', ['testController', 'testDirective'])

    return testModule;

});