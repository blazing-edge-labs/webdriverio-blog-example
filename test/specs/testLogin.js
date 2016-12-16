'use strict';

var LoginPage = require('../pageObjects/loginPage');
var ForgotPasswordPage = require('../pageObjects/forgotPasswordPage');
var HomePage = require('../pageObjects/homePage');

suite('Test Login Functionality using Page Objects - ', () => {
   test('Test the Login Form with incorrect credentials', () => {

      LoginPage.open();
      LoginPage.username.setValue('SecretUsername');
      LoginPage.password.setValue('SecretPass#');
      LoginPage.loginClick();
      browser.waitForVisible('.alert-error');

      LoginPage.loginError.getText().should.contain('Your email address, handle,'
         + ' or password is incorrect. Please try again.');
   });

   test('Test the Login Form with correct credentials', () => {

      LoginPage.open();
      LoginPage.login(globalEmail, globalPassword);

      LoginPage.confirmLogin.isVisible();

      HomePage.logout();

      LoginPage.loginButton.getText().should.be.equal('Log in');

    });

    test('Test forgot password', () => {

      const mail = 'some@email.com';
      ForgotPasswordPage.open();
      ForgotPasswordPage.enterEmail(mail);
      ForgotPasswordPage.resetButtonClick();

      ForgotPasswordPage.confirm.getText().should.contain('A link to create a '
         + 'new password has been emailed to ' + mail + '.');

    });
});
