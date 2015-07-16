define(
    ['marionette', 'underscore', './grid', 'text!./list.html'], 
    function(Marionette, _, Grid, template) {
        'use strict';
        
        return Marionette.LayoutView.extend({
            tagName: 'row',
            template: _.template(template),
            regions: {
                list: '[data-js="event-list"]'
            },
            
            onRender: function() {
                this.showChildView('list', new Grid({collection: this.collection}));
            }
        });
    }
);