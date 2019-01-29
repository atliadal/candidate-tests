const HomePage = require('../pages/HomePage');
const homePage = new HomePage();

const ElementHelpers = require('../util/ElementHelpers');
const elementHelpers = new ElementHelpers();

Given('I open application', function () {
   homePage.openApp();
   logger.info('Opening application');
   return browser.sleep(2000);
});

Then('{string} should be displayed', function (elem) {
    return expect(elementHelpers.isDisplayed(homePage[elem])).to.eventually.be.true;
});

When('I ask to the god', function () {
    homePage.askToGod();
    return browser.sleep(2000);
});

Then('response should be correct', function () {
    return expect(homePage.response.getText()).to.eventually.be.oneOf(['yes', 'no']);
  });



