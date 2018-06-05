Feature: Search
  Search results for a provided search term

  Scenario Outline: Search results appear for a provided search term
    Given The Craigslist home page is loaded
    And The search textbox is enabled
    When I enter the search term "<term>" and press enter
    Then Search results should appear for the search term entered

    Examples:
    |term|
    |car |
    |bike|
    |skateboard|
