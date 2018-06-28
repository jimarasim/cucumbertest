$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/craigslist.feature");
formatter.feature({
  "name": "Test Craigslist Smoke test scenarios",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@craigslist"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Search results contain search term in title",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@barbie"
    }
  ]
});
formatter.step({
  "name": "the search text box is enabled",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter the search term \"\u003ctext\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "All search results should have \"\u003ctext\u003e\" or a dollar amount in the title",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "text"
      ]
    },
    {
      "cells": [
        "barbie"
      ]
    },
    {
      "cells": [
        "honda"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "theres an open chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseTest.theres_an_open_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the craigslist web application home page is navigated to",
  "keyword": "Given "
});
formatter.match({
  "location": "CraigslistTest.the_craigslist_web_application_home_page_is_navigated_to()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search results contain search term in title",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@craigslist"
    },
    {
      "name": "@barbie"
    }
  ]
});
formatter.step({
  "name": "the search text box is enabled",
  "keyword": "Given "
});
formatter.match({
  "location": "CraigslistTest.the_search_text_box_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the search term \"barbie\"",
  "keyword": "When "
});
formatter.match({
  "location": "CraigslistTest.i_enter_the_search_term(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All search results should have \"barbie\" or a dollar amount in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "CraigslistTest.all_search_results_should_have_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "theres an open chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseTest.theres_an_open_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the craigslist web application home page is navigated to",
  "keyword": "Given "
});
formatter.match({
  "location": "CraigslistTest.the_craigslist_web_application_home_page_is_navigated_to()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search results contain search term in title",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@craigslist"
    },
    {
      "name": "@barbie"
    }
  ]
});
formatter.step({
  "name": "the search text box is enabled",
  "keyword": "Given "
});
formatter.match({
  "location": "CraigslistTest.the_search_text_box_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the search term \"honda\"",
  "keyword": "When "
});
formatter.match({
  "location": "CraigslistTest.i_enter_the_search_term(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All search results should have \"honda\" or a dollar amount in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "CraigslistTest.all_search_results_should_have_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});