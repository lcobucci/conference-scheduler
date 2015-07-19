define(
    ['marionette', 'app', './layout', './menu/main', './modal/main'],
    function(Marionette, scheduler, Layout, menu, modal) {
        'use strict';
        
        var layout = new Layout({ menu: menu, modal: modal });
        var channel = Marionette.Radio.channel('rendering');
        
        channel.reply('content:change', function(view) {
            layout.changeContent(view);
        });
        
        scheduler.on('before:start', function() {
            layout.render();
        });
    }
);