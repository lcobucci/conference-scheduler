define(
    ['marionette', 'app', './router', './event_collection'],
    function(Marionette, scheduler, Router, EventCollection) {
        'use strict';
        
        var channel = Marionette.Radio.channel('events');
        var renderingChannel = Marionette.Radio.channel('rendering');
        
        var events = new EventCollection();
        
        channel.reply('create', function(data) {
            return events.create(data);
        });
        
        channel.reply('fetch', function() {
            return events.fetch();
        });
        
        channel.reply('fetch:one', function(id) {
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
        
        scheduler.on('before:start', function() {
            scheduler.eventsRouter = new Router();
            
            renderingChannel.request(
                'menu:add',
                {label: 'Events', href: '/events', command: {channel: 'events', name: 'render:list'}}
            );
        });
    }
);