define(
    ['marionette', 'underscore', 'moment', 'text!./row.html'],
    function(Marionette, _, moment, template) {
        'use strict';
        
        return Marionette.ItemView.extend({
            tagName: 'tr',
            template: _.template(template),
            templateHelpers: {
                moment: moment
            }
        });
    }
);