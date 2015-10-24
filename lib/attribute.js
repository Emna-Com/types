(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.attribute = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  module.exports = {
    create: function create(opts) {
      var elem = document.createElement(opts['extends'] || 'div');
      elem.setAttribute(opts.name, '');
      return elem;
    },
    filter: function filter(elem, defs) {
      var attrs = elem.attributes;
      var attrsLen = attrs.length;
      var definitions = [];
      var tag = (elem.tagName || elem.localName).toLowerCase();

      for (var a = 0; a < attrsLen; a++) {
        var attr = attrs[a].nodeName;
        var definition = defs[attr];

        if (!definition) {
          continue;
        }

        var tagToExtend = definition['extends'];
        if (!tagToExtend || tag === tagToExtend) {
          definitions.push(definition);
        }
      }

      return definitions;
    }
  };
});