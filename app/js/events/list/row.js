define(
    ['backbone', 'underscore', 'moment', 'text!./row.html'],
    function(Backbone, _, moment, template) {
        'use strict';
        
        return Backbone.Marionette.ItemView.extend({
            tagName: 'tr',
            template: _.template(template),
            templateHelpers: {
                moment: moment
            },
            modelEvents: {
                'change': 'update'
            },
            ui:{
                edit: '[data-js="edit-btn"]',
                remove: '[data-js="remove-btn"]'
            },
            events: {
                'click @ui.edit': 'edit'
            },
            triggers: {
                'click @ui.remove': 'event:remove'
            },
            
            edit: function() {
                Backbone.history.navigate('events/' + this.model.get('slug'));
                Backbone.Radio.channel('events').request('render:form', this.model);
            },
            
            update: function() {
                this.triggerMethod('event:refresh', this);
            }
        });
    }
);