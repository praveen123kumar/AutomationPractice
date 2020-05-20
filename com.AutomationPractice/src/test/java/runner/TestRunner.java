package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Feature/DressPageValidation.feature",
glue="stepDefenitions", monochrome=true, dryRun=false, strict=true,
plugin={"pretty","junit:Report/junitreport/cucumber.xml",
		"json:Report/jsonreport/cucumber.json",
		"html:Report/webreport/cucumber"})

public class TestRunner {

}
