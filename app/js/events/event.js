define(['backbone', 'moment'], function(Backbone, moment) {
    'use strict';
    
    return Backbone.Model.extend({
        defaults: {
            slug: null,
            name: null,
            days: []
        },
        mutators: {
            firstDay: {
                get: function() {
                    var days = this.get('days');
                    
                    return days.length === 0 ? null : days[0];
                },
                set: function (key, value, options, set) {
                    this.updateDateRange(value, this.get('lastDay'));
                },
                transient: true
            },
            lastDay: {
                get: function() {
                    var days = this.get('days');
                    
                    return days.length === 0 ? null : days[days.length - 1];
                },
                set: function (key, value, options, set) {
                    this.updateDateRange(this.get('firstDay'), value);
                },
                transient: true
            }
        },
        updateDateRange: function(start, end) {
            var days = [];
            
            start = moment(start);
            end = moment(end);
            
            if ((!start.isValid() && !end.isValid()) || end.isBefore(start)) {
                return;
            }
            
            if (!start.isValid()) {
                start = moment(end);
            }
            
            if (!end.isValid()) {
                end = moment(start);
            }
            
            while (start.isBefore(end) || start.isSame(end)) {
                days.push(start.format());
                start.add(1, 'd');
            }
            
            this.set('days', days);
        }
    });
});