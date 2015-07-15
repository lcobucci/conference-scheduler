define(
    ['backbone', './collection', './item', './collection_view'],
    function(Backbone, ItemCollection, Item, Menu) {
        'use strict';
        
        var channel = Backbone.Radio.channel('rendering');
        var menuItems = new ItemCollection();
        
        channel.reply('menu:add', function(item) {
            menuItems.add(new Item(item));
        });
        
        channel.reply('menu:activate', function() {
            var page = Backbone.history.getFragment();
            var item = menuItems.findWhere({href: ('/' + page).split('/', 2).join('/')});
            var activeItem = menuItems.findWhere({active: true});
            
            if (activeItem) {
                activeItem.set('active', false);
            }
            
            if (item) {
                item.set('active', true);
            }
        });
        
        return new Menu({collection: menuItems});
    }
);