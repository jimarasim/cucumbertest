$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/facebook.feature");
formatter.feature({
  "name": "Test facebook smoke scenarios",
  "description": "",
  "keyword": "Feature"
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
  "location": "FacebookTest.theres_an_open_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Forgot Password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "i load the facebook web application",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookTest.i_load_the_facebook_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click the forgot account link",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookTest.i_click_the_forgot_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i see the Find Your Account form",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookTest.i_see_the_Find_Your_Account_form()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.step({
  "name": "theres an open chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookTest.theres_an_open_chrome_browser()"
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
  "location": "FacebookTest.i_load_the_facebook_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an invalid username \"joe@buck.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookTest.i_enter_an_invalid_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an invalid password \"fake\"",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookTest.i_enter_an_invalid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookTest.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should not be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookTest.user_should_not_be_logged_in()"
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
  "location": "FacebookTest.theres_an_open_chrome_browser()"
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
  "location": "FacebookTest.i_load_the_facebook_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an invalid username \"loser@loser.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookTest.i_enter_an_invalid_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an invalid password \"fake\"",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookTest.i_enter_an_invalid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookTest.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should not be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookTest.user_should_not_be_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});