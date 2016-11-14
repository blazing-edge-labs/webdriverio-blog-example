'use strict';

import account from '../helpers/account.js';

suite('Test the Login Functionality', () => {
	test('Test the user login', () => {

      account().login(); //defaults to globals

      browser.getTitle().should.be.equal('craigslist account');
      browser.getText('.bchead>a:nth-of-type(2)').should.be.equal('home of '
         + globalEmail);

   });

   test('Test user logout', () => {

      account().logout();

      browser.getTitle().should.be.equal('craigslist - account log in');

   });

});
