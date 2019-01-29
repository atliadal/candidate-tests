
## Technical questions

_Please answer all questions in this markdown file below the answer line_

##### 1. How long did you spend on the technical test? What would you add to your solution if you had more time? If you didn't spend much time on the technical test then use this as an opportunity to explain what you would add.

---
Answer: I spent around 4 hours in completing the test. I have written the tests in protractor and most of my time went into setting up framework. If, I would have more time then I would have spent some more time exploring Jest and then write the scenario where I can test the presence of image after simulation the click on button. The Jest test that I wrote for this is not simulating the click event. 

---

##### 2. What do you think is the most interesting trend in test automation?

---
Answer: 1. With most of the projects running in Agile, the focus has now moved on Shift Left and QA team should focus       on writing more and more tests at the API level as business logic is being written inside it and GUI acts just as       dumb client which renders the data. 
    2. WIth QA team working in close collaboration with the Business, QA team should adopt the approach of ATDD and write the tests when UI is being worked on. 
    3. QA team should mock the data wherever possible to avoid any dependency on UI being ready before writing the tests
    4. Self-healing tests is also a latest trend where teams are working on making the framework more robust where tests can automatically correct themselves on changes in UI layout.
    5. QA tests should be tightly integrated with CI/CD pipeline.

---

##### 3. How would you implement test automation in an application with streaming data?

----
Answer: The biggest challenge in streaming data applications is the generation of test data and quality of test data. The automation approach should focus on creating a producer that can generate the data similar to the real time data. This data should be validated against the schema in our automation framework and then can be used in our scripts. The automation framework should test each component - data producer , data processor and data consumer in isolation and then integration shoudl be tests between them.
 
----

##### 4. What would you say is the main difference between, component test, integration test and e2e test?

---
Answer: The main difference lies in the objective of these testing types. The component test focusses on testing an individual component in isolation, Integration test focusses on integration between the different components and e2e focusses on testing the flow from start to test and treating the application as a big single block.
As per the Test Automation pyramid, maximus automation tests should be written at the component level (i.e. unit tests), followed by integration tests (i.e. API tests) and then GUI tests (i.e. e2et tests)
 
---

##### 5. What do you think are the main issues with testing a responsive single page web application?

---
Answer: The main issues while testing a responsive single page application are:
    1. The different components are asynchronous in nature which can lead to issues in your automation framework as you have to use dynamic waits to handle such cases. But, with the introduction of new JavaScript test automation frameworks, this has been handled by tools and has minimized a lot.
    2. In single page applications, performance depends on both client side and server side. As SPA are JS/AJAX enabled, you should focus on performance monitoring the client side as well because poorly written JS code can lead to lot of performance issues at the client side.`
    3. Device sampling and Screen resolution sampling is one of the issue due to these applications being responsive in nature.
 
---

