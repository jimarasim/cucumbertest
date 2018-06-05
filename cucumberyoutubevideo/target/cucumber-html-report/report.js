$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/MyApplication.feature");
formatter.feature({
  "name": "Test facebook smoke scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test login with valid credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "open \"\u003cbrowser\u003e\" and load facebook application",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter a valid username and password",
  "keyword": "When "
});
formatter.step({
  "name": "User should be able to log in successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "browser"
      ]
    },
    {
      "cells": [
        "firefox"
      ]
    },
    {
      "cells": [
        "chrome"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test login with valid credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open \"firefox\" and load facebook application",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeTest.open_and_load_facebook_application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SmokeTest.i_enter_a_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_log_in_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test login with valid credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open \"chrome\" and load facebook application",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeTest.open_and_load_facebook_application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SmokeTest.i_enter_a_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_log_in_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});