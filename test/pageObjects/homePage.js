'use strict';

var Page = require('./page');

var HomePage = Object.create(Page, {

   postings: { get: function () {
      return browser.element('.tab:nth-of-type(1)');
   } },
   drafts: { get: function () {
      return browser.element('.tab:nth-of-type(2)');
   } },
   searches: { get: function () {
      return browser.element('.tab:nth-of-type(3)');
   } },
   settings: { get: function () {
      return browser.element('.tab:nth-of-type(4)');
   } },
   billing: { get: function () {
      return browser.element('.tab:nth-of-type(5)');
   } },

   logout: { value: function () {
      browser.url('/logout');
   } },

});

module.exports = HomePage
