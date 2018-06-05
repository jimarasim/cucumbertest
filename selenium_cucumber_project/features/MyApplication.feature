Feature: Test facebook smoke scenarios

  Scenario: Test login with valid credential
    Given open "firefox" and load facebook application
    When I enter a valid username and password
    Then User should be able to log in successfully