Feature: Home page landing page
  Home page should display when the website is navigated to.

  Scenario: Navigate to home page
    Given the url specified is https://seattle.craigslist.com
    When i press enter on the browser's address bar
    Then the home page should be loaded