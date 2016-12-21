'use strict';

module.exports = (selector) => {

   return { get: function () { return browser.element(selector); } }

};
