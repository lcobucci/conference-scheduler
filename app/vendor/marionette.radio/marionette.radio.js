define(
    ['underscore', 'marionette', 'backbone.radio'],
    function (_, Marionette, Radio) {
        'use strict';
        
        Marionette.Radio = Radio;
    
        Marionette.Application.prototype._initChannel = function () {
            this.channelName = _.result(this, 'channelName') || 'global';
            this.channel = _.result(this, 'channel') || Radio.channel(this.channelName);
        };
    
        return Marionette;
    }
);