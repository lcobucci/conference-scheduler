define(['marionette', 'underscore', 'text!./modal.html'], function(Marionette, _, template) {
    'use strict';
    
    return Marionette.LayoutView.extend({
        className: 'modal fade',
        template: _.template(template),
        attributes: {
            tabindex:-1,
            role: 'dialog',
            'aria-labelledby': 'modalTitle'
        },
        
        regions: {
            content: '[data-js="form-content"]'
        },
        
        changeContent: function(title, newContent) {
            this.$('#modalTitle').html(title);            
            this.showChildView('content', newContent);
        },
        
        show: function() {
            this.$el.modal('show');
        },
        
        hide: function() {
            this.$el.modal('hide');
        }
    });
});