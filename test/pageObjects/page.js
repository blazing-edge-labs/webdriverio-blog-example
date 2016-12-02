'use strict';

function Page () {
    this.title = 'My Page';
}
Page.prototype.open = function () {
    browser.url('/');
}

module.exports = new Page();
