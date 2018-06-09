package jaemzware.pages;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {

    protected RemoteWebDriver driver;
    public abstract String url();

    public BasePage(RemoteWebDriver driver) {
        this.driver = driver;

        PageFactory.initElements(driver, this);
    }

    public void navigate() {
        driver.get(this.url());
    }

    public boolean urlContains(String string) {
        return driver.getCurrentUrl().contains(string);
    }

    public void quit() {
        driver.quit();
    }

}
