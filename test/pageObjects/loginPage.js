'use strict';

import pageElement from '../helpers/pageElement.js';

var Page = require('./page');
var LoginPage = Object.create(Page, {

   username: pageElement('#inputEmailHandle'),

   password: pageElement('#inputPassword'),

   loginButton: pageElement('button=Log in');

   createAccount: pageElement('button=Create account');

   loginError: pageElement('.alert-error');

   confirmLogin: pageElement('#searchlegend');

   open: { value: function() {
      Page.open.call(this, '/login/home');
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
