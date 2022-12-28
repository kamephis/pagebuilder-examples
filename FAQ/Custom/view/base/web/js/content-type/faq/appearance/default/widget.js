define([
    'jquery',
    'accordion'
], function ($) {
    'use strict';

    return function (config, element) {
        var element = $(element);

        element.accordion({
            collapsible: true,
            multipleCollapsible: true
        });
    };
});
