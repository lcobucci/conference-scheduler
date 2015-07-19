define(
    ['marionette', 'underscore', './grid', 'events/event', 'text!./list.html'], 
    function(Marionette, _, Grid, Event, template) {
        'use strict';
        
        return Marionette.LayoutView.extend({
            tagName: 'row',
            template: _.template(template),
            regions: {
                list: '[data-js="event-list"]'
            },
            ui: {
                create: '[data-js="create-btn"]'
            },
            events: {
                'click @ui.create': 'openForm'
            },
            
            onRender: function() {
                this.showChildView('list', new Grid({collection: this.collection}));
            },
            
            openForm: function() {
                Marionette.Radio.channel('events').request('render:form', new Event());
            }
        });
    }
);