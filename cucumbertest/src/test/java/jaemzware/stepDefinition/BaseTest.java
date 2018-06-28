package jaemzware.stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import jaemzware.utilities.Browser;
import jaemzware.utilities.WebDriverFactory;
import org.openqa.selenium.remote.RemoteWebDriver;

public class BaseTest {
    public static RemoteWebDriver driver;

    @Given("theres an open chrome browser")
    public void theres_an_open_chrome_browser() throws Exception {
        driver = WebDriverFactory.getDriver(Browser.CHROME);
    }

    @After
    public void after(){
        driver.quit();
    }
}
