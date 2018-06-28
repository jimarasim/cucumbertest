package jaemzware.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;

import java.util.ArrayList;
import java.util.List;

public class CraigslistResultsPage extends BasePage {

    @FindBy(css="li.result-row")
    List<WebElement> results;

    public CraigslistResultsPage(RemoteWebDriver driver) {
        super(driver);
    }

    @Override
    public String url() {
        return "https://seattle.craigslist.org/search/sss";
    }

    public int resultsCount() {
        return results.size();
    }

    public String getTextOfFirstResult() {
        return results.get(0).getText();
    }

    public CraigslistPostPage clickFirstResult() {
        results.get(0).findElement(By.cssSelector("a.result-title")).click();

        return new CraigslistPostPage(driver);
    }

    public List<String> getResultsLinkText(){
        List<String> resultsLinkText = new ArrayList<>();

        for(WebElement result:results) {
            resultsLinkText.add(result.getText());
        }

        return resultsLinkText;
    }
}
