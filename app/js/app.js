define(['marionette', 'backbone', 'bootstrap', 'backbone.localStorage'], function(Marionette, Backbone) {
    'use strict';
    
    var scheduler = new Marionette.Application();
    
    scheduler.on('start', function() {
        Backbone.history.start();
        Backbone.Radio.channel('rendering').request('menu:activate');
    });
    
    return scheduler;
});