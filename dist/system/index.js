System.register(['./configure'], function (_export) {
    'use strict';

    var Configure;

    _export('configure', configure);

    function configure(aurelia, configCallback) {
        aurelia.container.registerInstance(Configure, Configure);
    }

    return {
        setters: [function (_configure) {
            Configure = _configure.Configure;
        }],
        execute: function () {
            _export('Configure', Configure);
        }
    };
});