define(['marionette', 'app', './router'], function(Marionette, scheduler, Router) {
    'use strict';
    
    var channel = Marionette.Radio.channel('home');
    var renderingChannel = Marionette.Radio.channel('rendering');
    
    channel.reply('render', function(view) {
        require(['home/home'], function(Home) {
            renderingChannel.request('content:change', new Home());
        })
    });
    
    scheduler.on('before:start', function() {
        scheduler.homeRouter = new Router();
        
        renderingChannel.request(
            'menu:add',
            {label: 'Home', href: '/', command: {channel: 'home', name: 'render'}}
        );
    });
});