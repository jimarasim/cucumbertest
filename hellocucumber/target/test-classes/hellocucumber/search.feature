Feature: Search
  Search results for a provided search term

  Scenario: Search results appear for a provided search term
    Given: The Craigslist home page is loaded
    And: The search textbox is enabled
    When: I enter a search term and press enter
    Then: Search results should appear for the search term entered