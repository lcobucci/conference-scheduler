define(['marionette', 'underscore', './item_view'], function(Marionette, _, ItemView) {
    'use strict';
    
    return Marionette.CollectionView.extend({
        tagName: 'ul',
        className: 'nav nav-pills nav-stacked',
        childView: ItemView,
        
        childEvents: {
            'clear:active': function () {
                var activeItem = this.collection.findWhere({active: true});
                
                if (activeItem) {
                    activeItem.set('active', false);
                }
            }
        }
    });
});