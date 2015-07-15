define(['backbone'], function(Backbone) {
    'use strict';
    
    return Backbone.Model.extend({
        defaults: {
            label: null,
            href: null,
            active: false,
            command: {
                channel: null,
                name: null
            }
        }
    });
});