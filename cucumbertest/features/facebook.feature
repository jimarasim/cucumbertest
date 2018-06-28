@facebook
Feature: Test facebook smoke scenarios

  Background:
    Given theres an open chrome browser
    Given i load the facebook web application

  Scenario: Forgot Password
    When i click the forgot account link
    Then i see the Find Your Account form

  Scenario Outline: Test login with valid credential
    When I enter an invalid username "<username>"
    And I enter an invalid password "<password>"
    And Click the login button
    Then User should not be logged in

    Examples:
    |username         |password|
    |joe@buck.com     | fake   |
    |loser@loser.com  | fake   |
