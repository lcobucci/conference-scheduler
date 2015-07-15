define(['backbone', 'underscore', 'text!./item_view.html'], function(Backbone, _, template) {
    'use strict';
    
    return Backbone.Marionette.ItemView.extend({
        tagName: 'li',
        template: _.template(template),
        attributes: {
            role: 'navigation'
        },
        
        ui: {
            link: 'a'
        },
        
        events: {
            'click @ui.link': 'navigate'
        },
        
        modelEvents: {
            'change:active': 'toogleActive'
        },
        
        onBeforeRender: function() {
            this.toogleActive();
        },
        
        navigate: function(e) {
            e.preventDefault();
            
            if (this.model.get('active') === true) {
                return;
            }
            
            this.triggerMethod('clear:active');
            this.model.set('active', true);
            
            var command = this.model.get('command');

            Backbone.history.navigate(this.model.get('href'));
            Backbone.Radio.channel(command.channel).request(command.name);
        },
        
        toogleActive: function() {
            if (this.model.get('active') === true) {
                this.$el.addClass('active');
                return;
            }
            
            this.$el.removeClass('active');
        }
    });
});