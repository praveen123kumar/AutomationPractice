package stepDefenitions;

import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.DressPage;
import pageObjects.HomePage;
import utility.BasePage;

public class DressesPageValidation {

	BasePage bp;
	DressPage dp;
	HomePage hp;

	public DressesPageValidation(){
		bp=new BasePage();
		dp=new DressPage();
		hp=new HomePage();
	}

	@Given("^User lanuch the application$")
	public void user_lanuch_the_application() throws Throwable {
		bp=new BasePage();
	}

	@When("^User click on tab \"(.*?)\"$")
	public void user_click_on_tab(String tab) throws Throwable {
		if(tab.equalsIgnoreCase("dresses")){
			hp.getDresses().click();
		}else{
			hp.getWomen().click();
		}
	}

	@Then("^User should see the same number of products count matching with the product header count displayed$")
	public void user_should_see_the_same_number_of_products_count_matching_with_the_product_header_count_displayed() throws Throwable {
			Assert.assertTrue(dp.getProductsSize()==dp.getCountFromHeader(), "Failed");
	}

	@When("^Click the tab \"(.*?)\"$")
	public void click_the_tab(String button) throws Throwable {
			if(button.equalsIgnoreCase("dresses")){
				hp.getDresses().click();
			}else if(button.equalsIgnoreCase("women")){
				hp.getWomen().click();
			}
	}

	@When("^the click on Add to cart button for the product \"(.*?)\"$")
	public void the_click_on_Add_to_cart_button_for_the_product(String click) throws Throwable {
		dp.clickFirstAddToCart();
	}

	@Then("^the product should added to cart page$")
	public void the_product_should_added_to_cart_page() throws Throwable {
		Assert.assertTrue(dp.verifyCheckoutButton(), "Failed");
	}

	@Then("^close the popup$")
	public void close_the_popup() throws Throwable {
		dp.getCloseBtn().click();
	}

}