'use strict';

const defaults = {

   username: globalUsername,
   password: globalPassword,
   email: globalEmail
};

module.exports = (user, pass) => {

   const opts = _.assign({}, defaults, options);

      return {

         addNew: () => {

            browser
               .click('a[href="https://accounts.craigslist.org/login/home')
               .waitForVisible('.accountform-btn');

            browser
               .setValue('#emailAddress', opts.globalEmail)
               .click('button=SAVE PMS SETTINGS')
               .waitForVisible('span[title="Edit"]');
         },

         login: () => {

         }
};
