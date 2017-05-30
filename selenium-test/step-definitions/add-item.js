module.exports = function () {
	
	let Pages = require("../helper-class/load-pages.class.js");
	
	this.Given(/^that I am viewing a shopping list with one or more items$/, async function() {
		let pages = new Pages(helpers,driver,by);
		await pages.oneItem('Bananer');
	});                    
 

	this.When(/^I click the trash button$/, async function() {
	 	await driver.findElement(by.css(".delete-item-icon")).click();                       
	 }); 

	this.Then(/^click the OK button in the modal$/, async function() {
		let el = await driver.findElement(by.css(".delete-item"));         
		await driver.wait(until.elementIsVisible(el, 3000));
		await driver.findElement(by.css(".delete-item")).click();
	});
	                       
	this.Then(/^the item should be removed from the shopping list$/, async function() {
	   let trs = await driver.findElements(by.css('#item-list tr'));
	   for(let tr of trs){
	     let text = await tr.getText();
	     if(text.indexOf('Bananer') >= 0){
	     	assert(false,'Found the item that should have been removed.');
	     }
	   }
	});
 

this.Given(/^that I am viewing a shopping list$/, async function() {
	await helpers.loadPage('http://localhost:3000');
	});
                        
 

this.When(/^I fill in name, quantity, unit and category$/, function() {
    //await driver.findElement(by.css("#new-item-name")).sendKeys("ny vara");

	});
                        
 

this.Then(/^click the “+” button$/, function() {
  
});
                        
 

this.Then(/^the item should be added to the shopping list$/, function() {
  
});
                        

};