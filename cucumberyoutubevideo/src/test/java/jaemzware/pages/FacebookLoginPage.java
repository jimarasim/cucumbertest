package jaemzware.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;

public class FacebookLoginPage extends BasePage {

    @FindBy(id="email")
    WebElement emailTextbox;

    @FindBy(id="pass")
    WebElement passwordTextbox;

    @FindBy(id="loginbutton")
    WebElement loginButton;

    @FindBy(xpath="//a[contains(text(),'Forgot account?')]")
    WebElement forgotAccountLink;

    public FacebookLoginPage(RemoteWebDriver driver) {
        super(driver);
    }

    @Override
    public String url() {
        return "https://www.facebook.com";
    }

    public void clickLoginButton() {
        loginButton.click();
    }

    public FacebookForgotAccountPage clickForgotAccountLink() {
        FacebookForgotAccountPage facebookForgotAccountPage = new FacebookForgotAccountPage(driver);

        forgotAccountLink.click();

        return facebookForgotAccountPage;
    }

    public FacebookLoginPage setEmail(String email) {
        emailTextbox.sendKeys(email);

        return this;
    }

    public FacebookLoginPage setPassword(String password) {
        passwordTextbox.sendKeys(password);

        return this;
    }

    public boolean emailIsEnabled() {
        return emailTextbox.isEnabled();
    }

    public boolean passwordIsEnabled() {
        return passwordTextbox.isEnabled();
    }

}
