const HttpClient = require("protractor-http-client").HttpClient;
const http = new HttpClient("https://yesno.wtf/api");

Given('I open API', function () {
    const getResponse = http.get("/");
    return expect(getResponse.statusCode).to.eventually.equal(200);
  });

Then('api response should be correct', function () {
    const getResponse = http.get("/");
    return expect(getResponse.jsonBody.get('answer')).to.eventually.be.oneOf(['yes', 'no']);
});


