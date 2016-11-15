// login.page.js
'use strict';

var Page = require('./page');

var LoginPage = Object.create(Page, {

   username: { get: function () {
      return browser.element('#inputEmailHandle'); }
   },
   password: { get: function () {
      return browser.element('#inputPassword'); }
   },
   loginButton: { get: function () {
      return browser.element('.accountform-btn'); }
   },
   loginError: { get: function () {
      return browser.element('.alert-error'); }
   },
   confirmLogin: { get: function() {
      return browser.element('.bchead>a:nth-of-type(2)'); }
   },

   open: { value: function() {
      Page.open.call(this, '/home/login');
   } },

   loginClick: { value: function() {
      this.loginButton.click();
   } },

   login: { value: function(username, password) {
      this.username.setValue(username);
      this.password.setValue(password);
      this.loginClick();
      browser.waitForVisible('#ef');
   } }

});

module.exports = LoginPage
