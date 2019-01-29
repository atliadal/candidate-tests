const path = require("path");
var cucumber = require('cucumber'),
    chai = require("chai"),
    chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const winstonLogger = require('../util/logger')
const jsonReports = process.cwd() + "/tests/reports/json";
const Reporter = require("../util/Reporter");

exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    directConnect: true,
    //baseUrl: "http://localhost:3000/",
    capabilities: {
        browserName: "chrome"
    },
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["../features/*.feature"],
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        global.Given = cucumber.Given;
        global.When = cucumber.When;
        global.Then = cucumber.Then;
        global.expect = chai.expect;
        global.logger = winstonLogger;
        Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        strict: true,
        format: ['node_modules/cucumber-pretty', 'json:./tests/reports/json/cucumber_report.json'],
        require: ["../testSpecifications/*.js", "../util/*.js"],
    },
    onComplete: function () {
        Reporter.createHTMLReport();
    }
};