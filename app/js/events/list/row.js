define(['marionette', 'underscore', 'text!./row.html'], function(Marionette, _, template) {
    'use strict';
    
    return Marionette.ItemView.extend({
        tagName: 'tr',
        template: _.template(template)
    });
});