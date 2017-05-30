module.exports = function () {
	this.Given(/^that i am viewing my shopping lists$/, async function() {
		await helpers.loadPage('http://localhost:3000');
	});

	this.When(/^i input the name of the list$/, async function() {
        await driver.findElement(by.css("#new-shoppinglist-name")).sendKeys("Mina matvaror");
	});

	this.When(/^push the plus button$/, async function() {
		await driver.findElement(by.css(".create-shoppinglist-btn")).click();
	});

	this.Then(/^the list should appear in the shopping list collection$/, async function() {
		let trs = await driver.findElements(by.css("#collection-list tr"));
		let found = false;
		for(tr of trs){
			let text = await tr.getText();
			if(text === 'Mina matvaror'){ found = true; break; };
		};
		assert(found,"Could not find a list with the correct name.");
	});

	this.When(/^i do not input the name of the list$/, async function() {
		let input = await driver.findElement(by.css("#new-shoppinglist-name"));
		let text = await input.getAttribute("value");
		assert(text==='',"The input is not empty.");

	});

	this.Then(/^an error message is shown$/, async function() {
		await driver.switchTo().alert();
	});
};