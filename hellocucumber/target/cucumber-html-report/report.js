$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/features/homepage.feature");
formatter.feature({
  "name": "Home page landing page",
  "description": "  Home page should display when the website is navigated to.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Navigate to home page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the url specified is https://seattle.craigslist.com",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepdefs.the_url_specified_is_https_seattle_craigslist_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i press enter on the browser\u0027s address bar",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepdefs.i_press_enter_on_the_browser_s_address_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the home page should be loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepdefs.the_home_page_should_be_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/features/search.feature");
formatter.feature({
  "name": "Search",
  "description": "  Search results for a provided search term",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search results appear for a provided search term",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The Craigslist home page is loaded",
  "keyword": "Given "
});
formatter.step({
  "name": "The search textbox is enabled",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the search term \"\u003cterm\u003e\" and press enter",
  "keyword": "When "
});
formatter.step({
  "name": "Search results should appear for the search term entered",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "term"
      ]
    },
    {
      "cells": [
        "car"
      ]
    },
    {
      "cells": [
        "bike"
      ]
    },
    {
      "cells": [
        "skateboard"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search results appear for a provided search term",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The Craigslist home page is loaded",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStepdefs.the_craigslist_home_page_is_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The search textbox is enabled",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStepdefs.the_search_textbox_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the search term \"car\" and press enter",
  "keyword": "When "
});
formatter.match({
  "location": "SearchStepdefs.i_enter_a_search_term_and_press_enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search results should appear for the search term entered",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepdefs.search_results_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search results appear for a provided search term",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The Craigslist home page is loaded",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStepdefs.the_craigslist_home_page_is_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The search textbox is enabled",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStepdefs.the_search_textbox_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the search term \"bike\" and press enter",
  "keyword": "When "
});
formatter.match({
  "location": "SearchStepdefs.i_enter_a_search_term_and_press_enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search results should appear for the search term entered",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepdefs.search_results_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search results appear for a provided search term",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The Craigslist home page is loaded",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStepdefs.the_craigslist_home_page_is_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The search textbox is enabled",
  "keyword": "And "
});
formatter.match({
  "location": "SearchStepdefs.the_search_textbox_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the search term \"skateboard\" and press enter",
  "keyword": "When "
});
formatter.match({
  "location": "SearchStepdefs.i_enter_a_search_term_and_press_enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search results should appear for the search term entered",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepdefs.search_results_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});