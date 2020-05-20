Feature: Dresses page validation

Scenario Outline: Verify Product Count

Given User lanuch the application
When User click on tab "<tab>"
Then User should see the same number of products count matching with the product header count displayed

Examples:
|tab|
|DRESSES|

Scenario Outline: Product Count Verification

Given User lanuch the application
When Click the tab "<button>"
And the click on Add to cart button for the product "<product>"
Then the product should added to cart page
And close the popup

Examples:
|button|products|
|DRESSES|Printed Dress|
