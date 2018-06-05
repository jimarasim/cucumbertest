package hellocucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/features"}, glue = {"StepDefs"}, plugin = {"html:target/cucumber-html-report"})
public class RunCucumberTest {}