Feature: Homepage validation

Scenario: Verify Subscription Message

Given User launch the application
When User enter email in the subscription text box
Then User should see subscription Message


Scenario Outline: Verify Tabs in Home Page

Given User launch the application
When User Click on the tab "<tab>"
Then User should see the respective details page

Examples:
|tab|
|DRESSES|
|WOMEN|
