define(['backbone', 'underscore', 'text!./layout.html'], function(Backbone, _, template) {
    'use strict';
    
    return Backbone.Marionette.LayoutView.extend({
        el: 'body',
        template: _.template(template),
        
        ui: {
            home: '[data-js="home"]'
        },
        
        events: {
            'click @ui.home': 'goHome'
        },
        
        regions: {
            menu: '[data-js="menu"]',
            content: '[data-js="content"]',
            modal: '[data-js="modal"]'
        },
        
        initialize: function(options) {
            this.menuView = options.menu;
            this.modalView = options.modal;
        },
        
        onRender: function() {
            this.showChildView('menu', this.menuView);
            this.showChildView('modal', this.modalView);
        },
        
        changeContent: function(newContent) {
            this.showChildView('content', newContent);
        },
        
        goHome: function(e) {
            e.preventDefault();
            
            Backbone.history.navigate(this.ui.home.attr('href'));
            
            Backbone.Radio.channel('home').request('render');
            Backbone.Radio.channel('rendering').request('menu:update');
        }
    });
});