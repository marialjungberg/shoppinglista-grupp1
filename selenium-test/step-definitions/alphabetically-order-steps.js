function sleep(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },ms);
  });
}


module.exports = function () {


	this.Given(/^that I’m viewing a shopping list with two or more items that is not sorted by name$/,async function() {
		await helpers.loadPage('http://localhost:3000'); 
		await driver.findElement(by.css("#new-shoppinglist-name")).sendKeys("Djur till middag", selenium.Key.ENTER);
		await driver.findElement(by.css("#collection-list")).click();
		await driver.findElement(by.css("#new-item-name")).sendKeys("björn", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("zebra", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("clownfisk", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("val", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("apa", selenium.Key.ENTER);
	});
    
    this.When(/^I choose to sort the shopping list by name on the sort dropdown$/, async function() {
    	await driver.findElement(by.css("#sort-dropdown")).click();
		await driver.findElement(by.css(".sort-name-btn")).click();	
	});

    this.Then(/^the list should be sorted by name$/, async function() {
  		let nameTds = await driver.findElements(by.css('#item-list tbody tr td:first-child'));
		let names = [];
		for(td of nameTds) {
			let text = await td.getText();
			names.push(text);
		}

		// Make a copy of names (will be a new array) and sort it
		let sortedNames = names.slice().sort();
		assert.deepEqual(names,sortedNames);
	});
};