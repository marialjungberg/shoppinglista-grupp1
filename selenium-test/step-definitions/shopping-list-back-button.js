function sleep(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },ms);
  });
}

module.exports = function () {
	this.Given(/^that I Am viewing a shopping list$/, async function() {
		await helpers.loadPage('http://localhost:3000');

		await driver.findElement(by.css("#new-shoppinglist-name")).sendKeys("Mina matvaror");
		await driver.findElement(by.css(".create-shoppinglist-btn")).click();

		await driver.findElement(by.css("#collection-list")).click();
	});

	this.When(/^I click the back button$/, async function() {
        await driver.findElement(by.css(".back-btn")).click();
		await sleep(1000);
	});

	this.Then(/^the shopping lists collection page should be visible$/, async function() {
		//await driver.wait(until.urlls("http://localhost:3000#start"));
		let trs = await driver.findElements(by.css("#collection-list tr"));
		let found = false;
		for(tr of trs){
			let text = await tr.getText();
			if(text === 'Mina matvaror'){ 
				found = true; 
				break; 
			};
		};
		assert(found,"Did not return to start-page.");

		await sleep(1000);
	});
}