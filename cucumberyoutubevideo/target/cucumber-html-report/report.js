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
  "name": "i load the facebook web application",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter an invalid username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter an invalid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should not be logged in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "joe@buck.com",
        "fake"
      ]
    },
    {
      "cells": [
        "loser@loser.com",
        "fake"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "theres an open chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeTest.theres_an_open_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test login with valid credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i load the facebook web application",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeTest.i_load_the_facebook_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an invalid username \"joe@buck.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "SmokeTest.i_enter_an_invalid_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an invalid password \"fake\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.i_enter_an_invalid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should not be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.user_should_not_be_logged_in()"
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "theres an open chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeTest.theres_an_open_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test login with valid credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i load the facebook web application",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeTest.i_load_the_facebook_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an invalid username \"loser@loser.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "SmokeTest.i_enter_an_invalid_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an invalid password \"fake\"",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.i_enter_an_invalid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should not be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.user_should_not_be_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});