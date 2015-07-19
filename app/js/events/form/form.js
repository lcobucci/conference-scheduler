define(
    ['marionette', 'underscore', 'speakingurl', 'moment', 'text!./form.html'],
    function(Marionette, _, slugify, moment, template) {
        'use strict';
        
        return Marionette.ItemView.extend({
            tagName: 'form',
            className: 'form-horizontal',
            template: _.template(template),
            templateHelpers: {
                moment: moment
            },
            ui: {
                id: '#eventId',
                name: '#eventName',
                startDate: '#startDate',
                endDate: '#endDate',
            },
            events: {
                'submit': 'persist',
                'change @ui.name': 'update',
                'keyup @ui.name': 'update',
                'change @ui.startDate': 'setStart',
                'change @ui.endDate': 'setEnd'
            },
            modelEvents: {
                'change:id': 'updateField'
            },
            
            persist: function(e) {
                e.preventDefault();
                
                Marionette.Radio.channel('events').request('persist', this.model);
            },
            
            update: function() {
                var value = this.ui.name.val();
                
                this.model.set('id', slugify(value));
                this.model.set('name', value, {trigger: false});
            },
            
            updateField: function() {
                this.ui.id.val(this.model.get('id'));
            },
            
            setStart: function() {
                this.model.set('firstDay', this.ui.startDate.val());
            },
            
            setEnd: function() {
                this.model.set('lastDay', this.ui.endDate.val());
            }
        });
    }
);