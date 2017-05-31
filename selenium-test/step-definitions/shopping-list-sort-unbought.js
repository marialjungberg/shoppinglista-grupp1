function sleep(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },ms);
  });
}

module.exports = function () {
	/*this.Given(/^that I’m viewing a shopping list$/, async function() {
		await helpers.loadPage('http://localhost:3000#start');

		await driver.findElement(by.css("#new-shoppinglist-name")).sendKeys("Mina matvaror");
		await driver.findElement(by.css(".create-shoppinglist-btn")).click();

		await driver.findElement(by.css("#collection-list")).click();

		await sleep(1000);
	});*/

	this.Given(/^that list has items that are both bought and not bought$/, async function() {
		await driver.findElement(by.css("#new-item-name")).sendKeys("Potatis");
		await driver.findElement(by.css(".create-item-btn")).click();
		await driver.findElement(by.css("#new-item-name")).sendKeys("Tomater");
		await driver.findElement(by.css(".create-item-btn")).click();
		await driver.findElement(by.css("#new-item-name")).sendKeys("Godis");
		await driver.findElement(by.css(".create-item-btn")).click();

		await driver.findElement(by.css(".bought-icon")).click();

		//await sleep(1000);
	});

	this.When(/^I choose to filter the shopping list by not bought on the filter dropdown$/, async function() {
		await driver.findElement(by.css("#filter-dropdown")).click();
		await driver.findElement(by.css(".filter-unbought-btn")).click();
        
		await sleep(1000);
	});

	this.Then(/^the list should only contain the items marked not bought$/, async function() {
		let boughtIcons = await driver.findElements(by.css('.bought-icon'));
		for(boughtIcon of boughtIcons) {
			let classes = await boughtIcon.getAttribute("class");
			//await driver.sleep(2000);
			assert(!(classes.indexOf("active")>0), "list contain bought items");
		}

		//await sleep(1000);
	});

	this.Given(/^that list has only bought items in it$/, async function() {
		await driver.findElement(by.css("#new-item-name")).sendKeys("Potatis");
		await driver.findElement(by.css(".create-item-btn")).click();
		await driver.findElement(by.css("#new-item-name")).sendKeys("Tomater");
		await driver.findElement(by.css(".create-item-btn")).click();
		await driver.findElement(by.css("#new-item-name")).sendKeys("Godis");
		await driver.findElement(by.css(".create-item-btn")).click();

		await driver.findElement(by.css("#item-list tbody tr:nth-child(1) .bought-icon")).click();
		await driver.findElement(by.css("#item-list tbody tr:nth-child(2) .bought-icon")).click();
		await driver.findElement(by.css("#item-list tbody tr:nth-child(3) .bought-icon")).click();

		await sleep(1000);
	});

	this.Then(/^the list should be empty.$/, async function() {
		let boughtIcons = await driver.findElements(by.css('.bought-icon'));
		for(boughtIcon of boughtIcons) {
			let classes = await boughtIcon.getAttribute("class");
			//await driver.sleep(2000);
			assert(!(classes.indexOf("active")>0), "list contain bought items");
		}

		boughtIcons = await driver.findElements(by.css('.bought-icon'));
		for(boughtIcon of boughtIcons) {
			let classes = await boughtIcon.getAttribute("class");
			await driver.sleep(2000);
			assert(classes.indexOf("active")>0, "list contain not bought items");
		}
	});
}