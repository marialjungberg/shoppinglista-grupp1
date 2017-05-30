module.exports = function () {

	let Pages = require("../helper-class/load-pages.class.js");

	this.Given(/^clicked the pen button$/, async function() {
		await driver.findElement(by.css(".edit-list")).click();
	});

	this.When(/^I fill in the new name$/, async function() {
        let input = await driver.findElement(by.css("#edit-list-name"));
		await driver.wait(until.elementIsVisible(input, 3000));
        await driver.findElement(by.css("#edit-shoppinglist-name")).sendKeys("New name");
	});
         

    this.When(/^click the OK button$/, async function() {
		await driver.findElement(by.css(".edit-list-modal")).click();
	});

    this.Then(/^the list should be called the new name$/, async function() {
    	let trs = await driver.findElements(by.css("#collection-list tr"));
		let found = false;
		for(tr of trs){
			let text = await tr.getText();
			if(text === 'New name'){ found = true; break; };
		};
		assert(found,"Could not find a list with the correct name.");
		await driver.sleep(3000);
	});

};