package com.jaemzware.stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class SmokeTest {

    WebDriver driver;

    @Before
    public void before(){
        System.setProperty("webdriver.gecko.driver", "geckodriver");
        driver = new FirefoxDriver();
    }

    @After
    public void after(){
        driver.quit();
    }

    @Given("open {string} and load facebook application")
    public void open_and_load_facebook_application(String string) {
        driver.manage().window().maximize();
        driver.get("https://www.facebook.com");
    }

    @When("I enter a valid username and password")
    public void i_enter_a_valid_username_and_password() {
        driver.findElement(By.id("email")).sendKeys("");
        driver.findElement(By.id("pass")).sendKeys("");


    }

    @Then("User should be able to log in successfully")
    public void user_should_be_able_to_log_in_successfully() {
        driver.findElement(By.id("loginbutton")).click();
    }

}
