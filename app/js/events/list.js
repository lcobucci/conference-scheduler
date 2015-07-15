define(['marionette', 'underscore', 'text!./list.html'], function(Marionette, _, template) {
    'use strict';
    
    return Marionette.ItemView.extend({
        className: 'row',
        template: _.template(template)
    });
});