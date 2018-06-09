package jaemzware.stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import jaemzware.pages.FacebookForgotAccountPage;
import jaemzware.pages.FacebookLoginPage;
import jaemzware.utilities.Browser;
import jaemzware.utilities.WebDriverFactory;
import org.junit.Assert;
import org.openqa.selenium.remote.RemoteWebDriver;

public class FacebookTest {

    FacebookLoginPage facebookLoginPage;
    FacebookForgotAccountPage facebookForgotAccountPage;
    RemoteWebDriver driver;

    @Given("theres an open chrome browser")
    public void theres_an_open_chrome_browser() throws Exception {
        driver = WebDriverFactory.getDriver(Browser.CHROME);
    }

    @Given("i load the facebook web application")
    public void i_load_the_facebook_web_application() {
        facebookLoginPage = new FacebookLoginPage(driver);
        facebookLoginPage.navigate();
    }

    @When("I enter an invalid username {string}")
    public void i_enter_an_invalid_username(String string) {
        facebookLoginPage.setEmail(string);
    }

    @When("I enter an invalid password {string}")
    public void i_enter_an_invalid_password(String string) {
        facebookLoginPage.setPassword(string);
    }

    @When("Click the login button")
    public void click_the_login_button() {
        facebookLoginPage.clickLoginButton();
    }

    @Then("User should not be logged in")
    public void user_should_not_be_logged_in() {
       Assert.assertTrue(facebookLoginPage.urlContains("login_attempt"));
       Assert.assertTrue(facebookLoginPage.emailIsEnabled());
       Assert.assertTrue(facebookLoginPage.passwordIsEnabled());
    }

    @When("i click the forgot account link")
    public void i_click_the_forgot_account_link() {
        facebookForgotAccountPage = facebookLoginPage.clickForgotAccountLink();
    }

    @Then("i see the Find Your Account form")
    public void i_see_the_Find_Your_Account_form() {
        Assert.assertTrue(facebookForgotAccountPage.emailTextboxEnabled());
        Assert.assertTrue(facebookForgotAccountPage.findYourAccountHeaderDisplayed());
        Assert.assertTrue(facebookForgotAccountPage.searchButtonEnabled());
    }

    @After
    public void after(){
        driver.quit();
    }
}
