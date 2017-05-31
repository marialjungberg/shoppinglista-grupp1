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
		let el = await driver.findElement(by.css(".delete-item-modal"));         
		await driver.wait(until.elementIsVisible(el, 3000));
		await driver.findElement(by.css(".delete-item-modal")).click();
		await driver.sleep(3000);
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
	
	let pages = new Pages(helpers,driver,by);
		await pages.oneList();
		await driver.findElement(by.css("#collection-list")).click();
	});
                        
 

this.When(/^I fill in name, quantity, unit and category$/, async function() {
    await driver.findElement(by.css("#new-item-name")).sendKeys("ny vara");
    await driver.findElement(by.css("#item-add-quantity")).sendKeys("1");
    await driver.findElement(by.css("#new-item-category")).click();
    await driver.findElement(by.css("#mejeri")).click();
    

	});
                        
 
this.Then(/^click the plus button$/, async function() {
  await driver.findElement(by.css(".create-item-btn")).click();
  await driver.sleep(3000);
});
                        
 

this.Then(/^the item should be added to the shopping list$/, function() {
  
});
                        

};