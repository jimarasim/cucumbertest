package jaemzware.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CraigslistPostPage extends BasePage {

    @FindBy(css="button.reply_button")
    WebElement replyButton;

    @FindBy(id="titletextonly")
    WebElement headerTitle;

    public CraigslistPostPage(RemoteWebDriver driver) {
        super(driver);
    }

    @Override
    public String url() {
        return "https://seattle.craigslist.org/";
    }

    public boolean replyButtonEnabled() {
        return replyButton.isEnabled();
    }

    public String getHeaderTitle() {
        return headerTitle.getText();
    }

    public CraigslistPostPage waitForReplyButtonEnabled() {
        (new WebDriverWait(driver, 10)).until(ExpectedConditions.elementToBeClickable(replyButton));

        return this;
    }
}
