function sleep(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },ms);
  });
}


module.exports = function () {


	this.Given(/^that I’m viewing a shopping list with items that are both bought and not bought$/, async function() {
		await helpers.loadPage('http://localhost:3000'); 
		await driver.findElement(by.css("#new-shoppinglist-name")).sendKeys("Mina matvaror", selenium.Key.ENTER);
		await driver.findElement(by.css("#collection-list")).click();
		await driver.findElement(by.css("#new-item-name")).sendKeys("tomat", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("mjölk", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("mjöl", selenium.Key.ENTER);
		await driver.findElement(by.css(".bought-icon")).click();	
	 		let boughtIcons = await driver.findElements(by.css('.bought-icon'));
			for(boughtIcon of boughtIcons) {
				let classes = await boughtIcon.getAttribute("class");
				if (classes.indexOf("active")>0){
				await driver.sleep(2000);
				return;  //lyckat
			}
		}
		assert(false, "No item bought as mark");
			
	});

	this.When(/^I choose to filter the shopping list by bought on the filter dropdown$/, async function() {
		await driver.findElement(by.css("#filter-dropdown")).click();
		await driver.findElement(by.css(".filter-bought-btn")).click();	
		await driver.sleep(5000);	

	});
	         

	this.Then(/^the list should only contain the bought items$/, async function() {
		let boughtIcons = await driver.findElements(by.css('.bought-icon'));
		for(boughtIcon of boughtIcons) {
			let classes = await boughtIcon.getAttribute("class");
			await driver.sleep(2000);
			assert(classes.indexOf("active")>0, "list contain not bought items");
		}
		
//nästa scenario

	});


this.Given(/^that I’m viewing a grocery list with no bought items in it$/,  async function() {
		await helpers.loadPage('http://localhost:3000'); 
		await driver.findElement(by.css("#new-shoppinglist-name")).sendKeys("Mina matvaror", selenium.Key.ENTER);
		await driver.findElement(by.css("#collection-list")).click();
		await driver.findElement(by.css("#new-item-name")).sendKeys("tomat", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("mjölk", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("mjöl", selenium.Key.ENTER);

});


this.Then(/^the list should be empty$/, async function() { 
		let trs = await driver.findElements(by.css('#item-list tr'));
		// if no items we except only on tr (headlines)
		assert(trs.length === 1, "Items still in list");
});

};
