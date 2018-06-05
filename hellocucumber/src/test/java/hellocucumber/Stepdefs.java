package hellocucumber;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Stepdefs {
    String url;
    WebDriver driver;

    @Before
    public void before() {
        driver = new ChromeDriver();
    }

    @After
    public void after() {
        driver.quit();
    }

    @Given("^the url specified is https://seattle\\.craigslist\\.com$")
    public void the_url_specified_is_https_seattle_craigslist_com() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        this.url = "https://seattle.craigslist.com";
    }

    @When("^i press enter on the browser's address bar$")
    public void i_press_enter_on_the_browser_s_address_bar() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        driver.get(this.url);
    }

    @Then("^the home page should be loaded$")
    public void the_home_page_should_be_loaded() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue(driver.getTitle().toLowerCase().contains("craigslist"));
    }

}