'use strict';

require.config({
    paths: {
        'jquery': '../vendor/jquery/dist/jquery',
        'bootstrap': '../vendor/bootstrap/dist/js/bootstrap',
        'underscore': '../vendor/underscore/underscore',
        'backbone': '../vendor/backbone/backbone',
        'backbone.babysitter': '../vendor/backbone.babysitter/lib/backbone.babysitter',
        'backbone.radio': '../vendor/backbone.radio/build/backbone.radio',
        'backbone.localStorage': '../vendor/Backbone.localStorage/backbone.localStorage',
        'marionette': '../vendor/marionette/lib/core/backbone.marionette',
        'marionette.radio': '../vendor/marionette.radio/marionette.radio',
        'text': '../vendor/requirejs-text/text',
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    },
    map: {
        '*': {
             'marionette': 'marionette.radio',
             'backbone.wreqr': 'backbone.radio'
         },
         'marionette.radio' : {
            'marionette': 'marionette'
         }
    }
});

require(['app'], function(app) {
    var modules = [
        'app/main', 
        'home/main', 
        'events/main'
    ];
    
    require(modules, function() {
        app.start();
    });
});