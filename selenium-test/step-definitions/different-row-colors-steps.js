module.exports = function () {

	let Pages = require("../helper-class/load-pages.class.js");

	this.Given(/^that I’m viewing a shopping list with two or more items$/, async function() {
		let pages = new Pages(helpers,driver,by);
		await pages.twoItems();

		assert(await driver.getCurrentUrl()==="http://localhost:3000/#list", "Wrong webpage loaded!");

		let rows = await driver.findElements(by.css("#item-list tbody tr"));
		assert(rows.length>1, "Not enough items");

	});

	this.When(/^I look at the list$/, async function() {

	});
       
    this.Then(/^every second row should be in a different color$/, async function() {
    	let trs = await driver.findElements(by.css("#item-list tbody tr"));
		assert(await trs[0].getCssValue('background-color') != await trs[1].getCssValue('background-color'), "The rows have the same background")
	});


};