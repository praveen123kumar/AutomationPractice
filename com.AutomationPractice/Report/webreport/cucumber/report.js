$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/DressPageValidation.feature");
formatter.feature({
  "line": 1,
  "name": "Dresses page validation",
  "description": "",
  "id": "dresses-page-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify Product Count",
  "description": "",
  "id": "dresses-page-validation;verify-product-count",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User lanuch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on tab \"\u003ctab\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should see the same number of products count matching with the product header count displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "dresses-page-validation;verify-product-count;",
  "rows": [
    {
      "cells": [
        "tab"
      ],
      "line": 10,
      "id": "dresses-page-validation;verify-product-count;;1"
    },
    {
      "cells": [
        "DRESSES"
      ],
      "line": 11,
      "id": "dresses-page-validation;verify-product-count;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Verify Product Count",
  "description": "",
  "id": "dresses-page-validation;verify-product-count;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User lanuch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on tab \"DRESSES\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should see the same number of products count matching with the product header count displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "DressesPageValidation.user_lanuch_the_application()"
});
formatter.result({
  "duration": 62428859394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DRESSES",
      "offset": 19
    }
  ],
  "location": "DressesPageValidation.user_click_on_tab(String)"
});
formatter.result({
  "duration": 3713838560,
  "status": "passed"
});
formatter.match({
  "location": "DressesPageValidation.user_should_see_the_same_number_of_products_count_matching_with_the_product_header_count_displayed()"
});
formatter.result({
  "duration": 2932808151,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Product Count Verification",
  "description": "",
  "id": "dresses-page-validation;product-count-verification",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User lanuch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Click the tab \"\u003cbutton\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the click on Add to cart button for the product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the product should added to cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the popup",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "dresses-page-validation;product-count-verification;",
  "rows": [
    {
      "cells": [
        "button",
        "products"
      ],
      "line": 22,
      "id": "dresses-page-validation;product-count-verification;;1"
    },
    {
      "cells": [
        "DRESSES",
        "Printed Dress"
      ],
      "line": 23,
      "id": "dresses-page-validation;product-count-verification;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Product Count Verification",
  "description": "",
  "id": "dresses-page-validation;product-count-verification;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User lanuch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Click the tab \"DRESSES\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the click on Add to cart button for the product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the product should added to cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "DressesPageValidation.user_lanuch_the_application()"
});
formatter.result({
  "duration": 5902356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DRESSES",
      "offset": 15
    }
  ],
  "location": "DressesPageValidation.click_the_tab(String)"
});
formatter.result({
  "duration": 3692408113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cproduct\u003e",
      "offset": 49
    }
  ],
  "location": "DressesPageValidation.the_click_on_Add_to_cart_button_for_the_product(String)"
});
formatter.result({
  "duration": 2028682835,
  "status": "passed"
});
formatter.match({
  "location": "DressesPageValidation.the_product_should_added_to_cart_page()"
});
formatter.result({
  "duration": 2247442064,
  "status": "passed"
});
formatter.match({
  "location": "DressesPageValidation.close_the_popup()"
});
formatter.result({
  "duration": 396300717,
  "status": "passed"
});
});