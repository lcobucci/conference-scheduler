define(
    ['marionette', 'app', './router', './event_collection'],
    function(Marionette, scheduler, Router, EventCollection) {
        'use strict';
        
        var channel = Marionette.Radio.channel('events');
        var renderingChannel = Marionette.Radio.channel('rendering');
        
        var events = new EventCollection();
        
        channel.reply('persist', function(event) {
            events.add(event);
            
            return event.save().done(function() {
                renderingChannel.request('modal:hide');
            });
        });
        
        channel.reply('fetch', function() {
            return events.fetch();
        });
        
        channel.reply('fetch:one', function(id) {
            channel.request('fetch');
            
            return events.get(id);
        });
        
        channel.reply('render:list', function() {
            channel.request('fetch').done(function() {
                require(['events/list/list'], function(List) {
                    renderingChannel.request(
                        'content:change',
                        new List({collection: events})
                    );
                });
            });
        });
        
        channel.reply('render:form', function(event) {
            channel.request('render:list');
            
            require(['events/form/form'], function(Form) {
                renderingChannel.request(
                    'modal:show',
                    event.isNew() ? 'Creating event' : 'Editing #' + event.get('id'),
                    new Form({model: event})
                );
            });
        });
        
        scheduler.on('before:start', function() {
            scheduler.eventsRouter = new Router();
            
            renderingChannel.request(
                'menu:add',
                {label: 'Events', href: '/events', command: {channel: 'events', name: 'render:list'}}
            );
        });
    }
);