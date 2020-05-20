package stepDefenitions;

import java.util.Random;

import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.HomePage;
import utility.BasePage;

public class HomePageValidation {

	HomePage hp;
	BasePage bp;
	
	int random = new Random().nextInt(12);	
	String email = "praveenram194" + random + "@gmail.com";

	public HomePageValidation(){
		hp=new HomePage();
		bp=new BasePage();
	}

	@Given("^User launch the application$")
	public void user_launch_the_application() throws Throwable {
		bp=new BasePage();
	}

	@When("^User enter email in the subscription text box$")
	public void user_enter_email_in_the_subscription_text_box() throws Throwable {
		hp.setNewsLetter(email);
	}

	@Then("^User should see subscription Message$")
	public void user_should_see_subscription_Message() throws Throwable {
		Assert.assertTrue(hp.getNewsLetterMsg().contains("successfully"), "Failed");
	}

	@When("^User Click on the tab \"(.*?)\"$")
	public void user_Click_on_the_tab(String tab) throws Throwable {
		if(tab.equalsIgnoreCase("dresses")){
			hp.clickDresses();
		}else if(tab.equalsIgnoreCase("women")){
			hp.getWomen().click();
		}
	}

	@Then("^User should see the respective details page$")
	public void user_should_see_the_respective_details_page() throws Throwable {
		Assert.assertTrue(bp.getTitlte().contains("Dresses")||
				bp.getTitlte().contains("Women"), "Failed");
	}
}