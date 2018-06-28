package jaemzware.stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import jaemzware.pages.CraigslistHomePage;
import jaemzware.pages.CraigslistPostPage;
import jaemzware.pages.CraigslistResultsPage;
import org.junit.Assert;

import java.util.List;

public class CraigslistTest {
    CraigslistHomePage craigslistHomePage;
    CraigslistResultsPage craigslistResultsPage;
    CraigslistPostPage craigslistPostPage;
    String textOfFirstResult;

    @Given("the craigslist web application home page is navigated to")
    public void the_craigslist_web_application_home_page_is_navigated_to() {
        craigslistHomePage = new CraigslistHomePage(BaseTest.driver);
        craigslistHomePage.navigate();
    }

    @Given("the search text box is enabled")
    public void the_search_text_box_is_enabled() {
        Assert.assertTrue(craigslistHomePage.searchTextBoxEnabled());
    }

    @When("I enter the search term {string}")
    public void i_enter_the_search_term(String string) {
        craigslistResultsPage = craigslistHomePage.searchForTerm(string);
    }

    @Then("At least {int} results should be displayed")
    public void at_least_results_should_be_displayed(Integer int1) {
        Assert.assertTrue(craigslistResultsPage.resultsCount() >= int1);
    }

    @When("I click the jobs link")
    public void i_click_the_jobs_link() {
        craigslistResultsPage = craigslistHomePage.clickJobsLink();
    }

    @When("note the link text of the first result")
    public void note_the_link_text_of_the_first_result() {
        textOfFirstResult = craigslistResultsPage.getTextOfFirstResult();
    }

    @When("click the first result")
    public void click_the_first_result() {
        craigslistPostPage = craigslistResultsPage.clickFirstResult();
    }

    @Then("the post page should appear for that result")
    public void the_post_page_should_appear_for_that_result() {
        craigslistPostPage.waitForReplyButtonEnabled();
    }

    @Then("the post page title should equal the saved link text")
    public void the_post_page_title_should_equal_the_saved_link_text() {
        Assert.assertTrue(textOfFirstResult.contains(craigslistPostPage.getHeaderTitle()));
    }

    @Then("All search results should have {string} or a dollar amount in the title")
    public void all_search_results_should_have_in_the_title(String string) {
        List<String> searchResultTitles = craigslistResultsPage.getResultsLinkText();

        for(String title:searchResultTitles) {
            System.out.println(title);
            Assert.assertTrue(title.toLowerCase().contains(string.toLowerCase()) || title.contains("$"));
        }
    }
}
