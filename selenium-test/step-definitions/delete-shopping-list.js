function sleep(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },ms);
  });
}


module.exports = function () {
	this.Given(/^that I have created a shopping list$/, async function() {
		await helpers.loadPage('http://localhost:3000');
        await driver.findElement(by.css("#new-shoppinglist-name")).sendKeys("Mina matvaror");
		await driver.findElement(by.css(".create-shoppinglist-btn")).click();
		await sleep(1000);
	});
	                        
	this.When(/^I clicked the trash button$/, async function() {
		await driver.findElement(by.css(".delete-list")).click();
		await sleep(1000);
	});
	                        
	this.When(/^click the OK button on the modal$/, async function() {
		await sleep(1000);
	});
	                        
	this.Then(/^the list should be removed from the shopping list collection$/, async function() {
	});
                        
};