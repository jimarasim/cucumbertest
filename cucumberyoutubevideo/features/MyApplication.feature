Feature: Test facebook smoke scenarios

  Scenario Outline: Test login with valid credential
    Given open "<browser>" and load facebook application
    When I enter a valid username and password
    Then User should be able to log in successfully

    Examples:
    |browser|
    |firefox|
    |chrome |
