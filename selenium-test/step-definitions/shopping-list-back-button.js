function sleep(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },ms);
  });
}

module.exports = function () {
	this.Given(/^that I’m viewing a shopping list$/, async function() {
		await helpers.loadPage('http://localhost:3000#list');
		await sleep(1000);
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