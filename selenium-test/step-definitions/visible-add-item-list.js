function sleep(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },ms);
  });
}

module.exports = function () {

	this.Given(/^that I’m viewing a shopping list$/, async function() {
		await helpers.loadPage('http://localhost:3000');
        await driver.findElement(by.css("#new-shoppinglist-name")).sendKeys("Mina matvaror");
		await driver.findElement(by.css(".create-shoppinglist-btn")).click();
		await driver.findElement(by.css("#collection-list")).click();
		await sleep(2000);
	});
	                        

	this.When(/^the shopping list is longer than the screen height$/, async function() {
		await driver.findElement(by.css("#new-item-name")).sendKeys("kex", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("skorpa", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("knäckebröd", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("limpa", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("baguette", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("bagel", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("småfranska", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("munk", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("kanelbulle", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("formbröd", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("fullkornsbröd", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("tunnbröd", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("korvbröd", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("chokladboll", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("mazarin", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("havrekaka", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("rågbröd", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("surdegsbröd", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("muffins", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("wienerbröd", selenium.Key.ENTER);
		await sleep(2000);
    	await driver.findElement(by.css("#sort-dropdown")).click();
		await driver.findElement(by.css(".sort-name-btn")).click();	
		await sleep(2000);
	});
	                        

	this.Then(/^the input bar should be visible$/, async function() {
		assert (await driver.findElement(by.css("#new-item-name")).isDisplayed,"the input bar is not visible");         
	});
                       
};