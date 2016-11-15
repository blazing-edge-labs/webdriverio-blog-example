'use strict';

var Page = require('./page');

var ForgotPasswordPage = Object.create(Page, {

   emailBox: { get: function () {
      return browser.element('#email');
   } },
   resetButton: { get: function () {
      return browser.element('.accountform-btn');
   } },
   confirm: { get: function () {
      return browser.element('.alert-success');
   } },

   open: { value: function () {
      browser
         .url('/reset')
         .waitForVisible('.password-reset-box');
   } },

   enterEmail: { value: function (mail) {
      this.emailBox.setValue(mail);
   } },

   resetButtonClick: { value: function () {
      this.resetButton.click();
   } }

});

module.exports = ForgotPasswordPage
