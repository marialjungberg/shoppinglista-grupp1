function sleep(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },ms);
  });
}

module.exports = function () {
	this.Given(/^that I’m viewing a shopping list$/, async function() {
		await helpers.loadPage('http://localhost:3000#start');

		await driver.findElement(by.css("#new-shoppinglist-name")).sendKeys("Mina matvaror");
		await driver.findElement(by.css(".create-shoppinglist-btn")).click();

		await driver.findElement(by.css("#collection-list")).click();

		await sleep(1000);
	});

	this.Given(/^that list has items that are both bought and not bought$/, async function() {
		await driver.findElement(by.css("#new-item-name")).sendKeys("Potatis");
		await driver.findElement(by.css(".create-item-btn")).click();
		await driver.findElement(by.css("#new-item-name")).sendKeys("Tomater");
		await driver.findElement(by.css(".create-item-btn")).click();
		await driver.findElement(by.css("#new-item-name")).sendKeys("Godis");
		await driver.findElement(by.css(".create-item-btn")).click();

		
		await driver.findElement(by.css(".filter-unboughts-button").click());

		await sleep(1000);
	});

	this.When(/^I choose to filter the shopping list by not bought on the filter dropdown$/, async function() {
        
		await sleep(1000);
	});

	this.Then(/^the list should only contain the items marked not bought$/, async function() {
		await driver.findElement(by.css("#collection-list"));

		await sleep(1000);
	});
}