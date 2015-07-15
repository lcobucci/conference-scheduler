define(['marionette', 'app', './router'], function(Marionette, scheduler, Router) {
    'use strict';
    
    var channel = Marionette.Radio.channel('events');
    var renderingChannel = Marionette.Radio.channel('rendering');
    
    channel.reply('render:list', function() {
        require(['events/list'], function(List) {
            renderingChannel.request('content:change', new List());
        });
    });    
    
    scheduler.on('before:start', function() {
        scheduler.eventsRouter = new Router();
        
        renderingChannel.request(
            'menu:add',
            {label: 'Events', href: '/events', command: {channel: 'events', name: 'render:list'}}
        );
    });
});