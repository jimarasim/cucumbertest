Feature: Test facebook smoke scenarios

  Background:
    Given theres an open chrome browser

  Scenario Outline: Test login with valid credential
    Given i load the facebook web application
    When I enter an invalid username "<username>"
    And I enter an invalid password "<password>"
    And Click the login button
    Then User should not be logged in

    Examples:
    |username         |password|
    |joe@buck.com     | fake   |
    |loser@loser.com  | fake   |
