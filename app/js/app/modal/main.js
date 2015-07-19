define(
    ['backbone', './modal'],
    function(Backbone, Modal) {
        'use strict';
        
        var channel = Backbone.Radio.channel('rendering');
        var modal = new Modal();
        
        channel.reply('modal:show', function(title, content) {
            modal.changeContent(title, content);
            modal.show();
        });
        
        channel.reply('modal:hide', function(title, content) {
            modal.hide();
        });
        
        return modal;
    }
);