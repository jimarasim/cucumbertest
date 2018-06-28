@craigslist
Feature: Test Craigslist Smoke test scenarios
  Background:
    Given theres an open chrome browser
    Given the craigslist web application home page is navigated to

    @search
    Scenario Outline: Test search
      Given the search text box is enabled
      When I enter the search term "<term>"
      Then At least 10 results should be displayed

      Examples:
      |term|
      |skateboard|
      |honda     |
      |scooter   |
      |dolls     |

    @post
    Scenario: Navigate to post page through links
      When I click the jobs link
      And note the link text of the first result
      And click the first result
      Then the post page should appear for that result
      And the post page title should equal the saved link text

      @barbie
      Scenario Outline: Search results contain search term in title
        Given the search text box is enabled
        When I enter the search term "<text>"
        Then All search results should have "<text>" or a dollar amount in the title

        Examples:
        |text|
        |barbie|
        |honda|
