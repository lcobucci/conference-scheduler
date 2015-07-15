define(
    ['marionette', 'app'],
    function(Marionette, scheduler, Home) {
        'use strict';
        
        return Marionette.AppRouter.extend({
            appRoutes: {
                '': 'home'
            },
            
            controller: {
                home: function() {
                    Marionette.Radio.channel('home').request('render');
                }
            }
        });
    }
);