define(['marionette', 'app'], function(Marionette, scheduler) {
    'use strict';
    
    return Marionette.AppRouter.extend({
        appRoutes: {
            'events': 'list',
            'events/:id': 'form'
        },
        
        controller: {
            list: function() {
                Marionette.Radio.channel('events').request('render:list');
            },
            
            form: function(id) {
                var channel = Marionette.Radio.channel('events');
                
                channel.request('render:form', channel.request('fetch:one', id));
            }
        }
    });
});