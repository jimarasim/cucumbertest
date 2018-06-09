package jaemzware.utilities;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

public class WebDriverFactory {

    public static RemoteWebDriver getDriver(Browser browser) throws Exception {
        RemoteWebDriver driver;

        switch(browser) {
            case CHROME:
                System.setProperty("webdriver.chrome.driver", "chromedriver");
                driver = new ChromeDriver();
                break;
            case FIREFOX:
                System.setProperty("webdriver.geckodriver.driver", "geckodriver");
                driver = new FirefoxDriver();
                break;
            default:
                throw new Exception("INVALID DRIVER");

        }

        driver.manage().window().maximize();

        return driver;

    }
}
