define(
    ['marionette', 'app', './layout', './menu/main'],
    function(Marionette, scheduler, Layout, menu) {
        'use strict';
        
        var layout = new Layout({ menu: menu });
        var channel = Marionette.Radio.channel('rendering');
        
        channel.reply('content:change', function(view) {
            layout.changeContent(view);
        });
        
        scheduler.on('before:start', function() {
            layout.render();
        });
    }
);