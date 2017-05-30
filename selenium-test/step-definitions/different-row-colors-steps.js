module.exports = function () {

	let Pages = require("../helper-class/load-pages.class.js");

	this.Given(/^that I’m viewing a shopping list with two or more items$/, async function() {
		let pages = new Pages(helpers,driver,by);
		await pages.twoItems();
		await driver.sleep(3000);

	});

	this.When(/^look at the list$/, async function() {

	});
       
    this.Then(/^every second row should be in a different color$/, async function() {
    	let trs = await driver.findElements(by.css("#collection-list tbody tr"));
    	for(tr of trs){
			let text = await tr.getText();
			if(text === 'Mina matvaror'){ found = true; break; }
		};
	});


};