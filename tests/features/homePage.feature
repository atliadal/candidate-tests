Feature: Open Application and verify the presence of elements
As a user, I should be able to open application and home page should have one text box and one button

Scenario: As a user, I open application to verify the presence of text box and button
Given I open application
Then "textBox" should be displayed
And "askToGodButton" should be displayed

Scenario: As a user, I open application and verify the response after asking to the God
Given I open application
When I ask to the god
Then response should be correct