function sleep(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },ms);
  });
}


module.exports = function () {
	this.Given(/^that i am viewing my shopping lists$/, async function() {
		await helpers.loadPage('http://localhost:3000');
		await sleep(1000);
	});

	this.When(/^i input the name of the list$/, async function() {
        await driver.findElement(by.css("#new-shoppinglist-name")).sendKeys("Mina matvaror");
		await sleep(1000);
	});

	this.When(/^push the plus button$/, async function() {
		await driver.findElement(by.css(".create-shoppinglist-btn")).click();
		await sleep(5000);

	});

	this.Then(/^the list should appear in the shopping list collection$/, async function() {
		let trs = await driver.findElements(by.css("#collection-list tr"));
		let found = false;
		for(tr of trs){
			let text = await tr.getText();
			if(text === 'Mina matvaror'){ found = true; break; }
		};
		assert(found,"Could not find a list with the correct name.");
	});
};