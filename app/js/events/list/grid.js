define(
    ['marionette', 'underscore', './row', 'text!./grid.html'],
    function(Marionette, _, Row, template) {
        'use strict';
        
        return Marionette.CompositeView.extend({
            childView: Row,
            childViewContainer: 'tbody',
            tagName: 'table',
            className: 'table table-striped table-hover table-condensed',
            template: _.template(template)
        });
    }
);