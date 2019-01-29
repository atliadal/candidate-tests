const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");
const reporter = require("cucumber-html-reporter");
const htmlReports = process.cwd() + "/tests/reports/html";
const targetJson = process.cwd() + "/tests/reports/json/cucumber_report.json";


const cucumberReporteroptions = {
  theme: "bootstrap",
  jsonFile: targetJson,
  output: htmlReports + "/cucumber_reporter.html",
  reportSuiteAsScenarios: true
};

class Reporter {

  static createDirectory(dirName) {
    //Check if the directory exist
    if (!fs.existsSync(dirName)) {
      mkdirp.sync(dirName);
    }
    }

  static createHTMLReport() {

    try {
      reporter.generate(cucumberReporteroptions);
      logger.info('cucumber_report.html created successfully!');
    } catch (err) {
      if (err) {
        logger.error("Failed to save cucumber test results to json file.");
        logger.error(err);
      }
    }
  }

}
module.exports = Reporter;