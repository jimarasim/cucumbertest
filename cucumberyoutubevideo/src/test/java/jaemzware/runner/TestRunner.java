package jaemzware.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"features"}, glue = {"jaemzware.stepDefinition"}, plugin = {"html:target/cucumber-html-report", "pretty:target/cucumber-pretty.txt"})
public class TestRunner { }
