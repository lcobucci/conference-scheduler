define(['backbone'], function(Backbone) {
    'use strict';
    
    return Backbone.Model.extend({
        defaults: {
            name: null,
            slug: null,
            days: []
        }
    });
});