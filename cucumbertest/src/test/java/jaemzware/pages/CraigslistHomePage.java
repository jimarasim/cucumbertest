package jaemzware.pages;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;

public class CraigslistHomePage extends BasePage {

    @FindBy(id="query")
    WebElement searchTextBox;

    @FindBy(css = "#jjj a.jjj")
    WebElement jobsLink;

    public CraigslistHomePage(RemoteWebDriver driver) {
        super(driver);
    }

    @Override
    public String url() {
        return "https://seattle.craigslist.org";
    }

    public CraigslistResultsPage searchForTerm(String term) {
        searchTextBox.sendKeys(term);
        searchTextBox.sendKeys(Keys.ENTER);

        return new CraigslistResultsPage(driver);
    }

    public boolean searchTextBoxEnabled() {
        return searchTextBox.isEnabled();
    }

    public CraigslistResultsPage clickJobsLink() {
        jobsLink.click();

        return new CraigslistResultsPage(driver);
    }
}
