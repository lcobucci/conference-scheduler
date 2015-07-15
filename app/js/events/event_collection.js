define(['backbone', './event'], function(Backbone, Event) {
    'use strict';
    
    return Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage("events"),
        model: Event
    });
});