package StepDefs;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class SearchStepdefs {
    WebDriver driver;
    WebElement searchTextbox;

    @Before
    public void before() {
        driver = new ChromeDriver();
    }

    @After
    public void after() {
        driver.quit();
    }

    @Given("^The Craigslist home page is loaded$")
    public void the_craigslist_home_page_is_loaded() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        driver.get("https://seattle.craigslist.com");
    }

    @Given("^The search textbox is enabled$")
    public void the_search_textbox_is_enabled() throws Exception {
        searchTextbox = driver.findElement(By.id("query"));
        Assert.assertTrue(searchTextbox.isEnabled());
    }

    @When("^I enter the search term \"([^\"]*)\" and press enter$")
    public void i_enter_a_search_term_and_press_enter(String searchterm) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        searchTextbox.sendKeys(searchterm);
        searchTextbox.sendKeys(Keys.ENTER);
    }

    @Then("^Search results should appear for the search term entered$")
    public void search_results_appear() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue(driver.findElements(By.cssSelector("li.result-row")).size() > 0);
    }

}