package jaemzware.stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SmokeTest {

    WebDriver driver;

    @Before
    public void before(){
        System.setProperty("webdriver.chrome.driver", "chromedriver");
    }

    @After
    public void after(){
        driver.quit();
    }

    @Given("theres an open chrome browser")
    public void theres_an_open_chrome_browser() {
        driver = new ChromeDriver();

        driver.manage().window().maximize();
    }

    @Given("i load the facebook web application")
    public void i_load_the_facebook_web_application() {
        driver.get("https://www.facebook.com");
    }

    @When("I enter an invalid username {string}")
    public void i_enter_an_invalid_username(String string) {
        driver.findElement(By.id("email")).sendKeys(string);
    }

    @When("I enter an invalid password {string}")
    public void i_enter_an_invalid_password(String string) {
        driver.findElement(By.id("pass")).sendKeys(string);
    }

    @When("Click the login button")
    public void click_the_login_button() {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.id("loginbutton")).click();
    }

    @Then("User should not be logged in")
    public void user_should_not_be_logged_in() {
       Assert.assertTrue(driver.getCurrentUrl().contains("login_attempt"));
       Assert.assertEquals(driver.findElements(By.id("email")).size(),1);
        Assert.assertEquals(driver.findElements(By.id("pass")).size(),1);
    }

}
