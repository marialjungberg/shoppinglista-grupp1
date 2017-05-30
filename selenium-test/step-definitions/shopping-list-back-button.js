function sleep(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },ms);
  });
}
	let Pages = require("../helper-class/load-pages.class.js");

module.exports = function () {
	this.Given(/^that I’m viewing a shopping list$/, async function() {
	let pages = new Pages(helpers,driver,by);
		await pages.oneList();
		await driver.findElement(by.css("#collection-list")).click();
	});

	this.When(/^I click the back button$/, async function() {
        await driver.findElement(by.css(".back-btn")).click();
		await sleep(1000);
	});

	this.Then(/^the shopping lists collection page should be visible$/, async function() {
		//await driver.wait(until.urlls("http://localhost:3000#start"));
		await driver.findElement(by.css("#collection-list"));

		await sleep(1000);
	});
}