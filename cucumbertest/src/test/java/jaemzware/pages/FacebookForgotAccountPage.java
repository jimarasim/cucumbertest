package jaemzware.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;

public class FacebookForgotAccountPage extends BasePage {

    @FindBy(xpath="//h2[contains(text(),'Find Your Account')]")
    WebElement findYourAccountHeader;

    @FindBy(id="identify_email")
    WebElement emailTextbox;

    @FindBy(css="input[value='Search']")
    WebElement searchButton;

    public FacebookForgotAccountPage(RemoteWebDriver driver) {
        super(driver);
    }

    @Override
    public String url() {
        return "https://www.facebook.com/login/identify?ctx=recover&lwv=110";
    }

    public boolean findYourAccountHeaderDisplayed() {
        return findYourAccountHeader.isDisplayed();
    }

    public boolean emailTextboxEnabled() {
        return emailTextbox.isEnabled();
    }

    public boolean searchButtonEnabled() {
        return searchButton.isEnabled();
    }

}
