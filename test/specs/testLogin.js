'use strict';

var LoginPage = require('../pageObjects/loginPage');

suite('Test Login Functionality using Page Objects - ', () => {
   test('Test the Login Form with incorrect credentials', () => {

      LoginPage.open();
      LoginPage.username.setValue('SecretUsername');
      LoginPage.password.setValue('SecretPass#');
      LoginPage.loginClick();
      browser.waitForVisible('.alert-error');

      LoginPage.error.getText().should.contain('Your email address, handle or password is incorrect. Please try again.');
   });

   test('Test the Login Form with correct credentials', () => {

      LoginPage.open();
      LoginPage.login(globalEmail, globalPassword);

      LoginPage.confirm.getText().should.contain('home of ' + globalEmail);
    });

   //  test('Test forgot password', () => {
    //
   //  });
});
