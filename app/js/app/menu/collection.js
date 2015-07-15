define(['backbone', './item'], function(Backbone, Item) {
    'use strict';
    
    return Backbone.Collection.extend({
        model: Item,
        
        comparator: 'href'
    });
});