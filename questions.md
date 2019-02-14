
## Technical questions

_Please answer all questions in this markdown file below the answer line_

##### 1. How long did you spend on the technical test? What would you add to your solution if you had more time? If you didn't spend much time on the technical test then use this as an opportunity to explain what you would add.

---
I've spent around 5 hours. It is the first time I'm working with <em>Jest</em> so I invested some time in learning the basics of its API by reading the documentation. If I had more time, I would eliminate duplicate code with fixtures as I read that <em>Jest</em> supports such functionality.

---

##### 2. What do you think is the most interesting trend in test automation?

---
I believe the most interesting trend is the fact that test automation nowadays is more focused on low level testing(unit, integration) as opposed to only automating high-level regression tests via the UI. The gains are: getting quicker feedback on whether something has gone wrong and of course, test execution is much faster plus, tests are generally more robust. A lot of modern testing frameworks and libraries such as: <em>Jest, Cypress, Mocha, Chai, Sinon</em> etc, follow this paradigm.

---

##### 3. How would you implement test automation in an application with streaming data?

----
I would focus a lot on testing the relevant APIs and how they communicate with each other to produce the final result of a working application. Depending on the ecosystem architecture(e.g, microservices), I would make sure that, at every commit/code change, the application's data flow is not broken so I would make sure that I have an acceptable amount of integration/contract tests.
It is also equally important to set the correct monitoring of these services, since I would want to know if something goes wrong(e.g, if for whatever reason there is an absence of data when there shouldn't be any).
 
----

##### 4. What would you say is the main difference between, component test, integration test and e2e test?
   
---
- <strong>Component/Unit testing:</strong> Testing an isolated single unit or component, excluding all its dependencies. For example, testing the output of a single function when given a certain input, while mocking all its surrounding dependencies.
- <strong>Integration testing:</strong> Usually being split into: 
     <strong>Unit integration testing:</strong> where two or more distinct units or components are being tested together, in order to assess that they produce the correct result when called(e.g, two functions that use each other's return data in order to produce an output).
     <strong>System integration testing:</strong> where two systems or services are being tested in order to assess they function and communicate correctly together(e.g, a Front-end app and an API or a client and a database).
- <strong>E2E testing:</strong> A testing type that checks a specific business flow or user journey, from start till finish. It is a type that is being used in high-level testing and can serve a lot of different purposes such as:
    - Making sure that a user flow meets the end-user's needs,
    - Making sure that all acceptance criteria for a specific flow are met,
    - Potentially uncovering hidden acceptance criteria,
    - Assessing a user flow's usability and overall user experience/accessibility,
    - Asserting that a potential change in a feature, will not break the                pre-defined user flow
    An example could be: a bank customer, logging to their e-banking, choosing their account and performing a transaction all the way till the transaction is complete and the user logs out.
    
---

##### 5. What do you think are the main issues with testing a responsive single page web application?

---
- Since there probably won't be page re-loading and all live changes will be done with JS, it could be a challenge to avoid having certain requests resolving before or after others, with an incorrect order which can result in failures or wrong data displayed/stored and thus, greatly decreasing usability and user experience.
- Developing the app in a way that is performing equally great in different platforms or devices and browsers
- Memory/storage management if the app would need to be running for a prolonged period of time in order to make sense for the end-user.
 
---
