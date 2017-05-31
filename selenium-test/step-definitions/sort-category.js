function sleep(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },ms);
  });
}


module.exports = function () {



this.Given(/^that I’m viewing a shopping list with two or more items that is not sorted by category$/, async function() {

  		await helpers.loadPage('http://localhost:3000'); 
		await driver.findElement(by.css("#new-shoppinglist-name")).sendKeys("Till min fest", selenium.Key.ENTER);
		await driver.findElement(by.css("#collection-list")).click();
		await driver.findElement(by.css("#new-item-name")).sendKeys("sugrör")
		await driver.findElement(by.css("#new-item-category")).click();
		await driver.findElement(by.css("#hälsa")).click();
		await driver.findElement(by.css(".create-item-btn")).click();
			await driver.findElement(by.css("#new-item-name")).sendKeys("plastmuggar")
			await driver.findElement(by.css("#new-item-category")).click();
			await driver.findElement(by.css("#mejeri")).click();
			await driver.findElement(by.css(".create-item-btn")).click();
					await driver.findElement(by.css("#new-item-name")).sendKeys("alkohol")
					await driver.findElement(by.css("#new-item-category")).click();
					await driver.findElement(by.css("#deli")).click();
					await driver.findElement(by.css(".create-item-btn")).click();
						await driver.findElement(by.css("#new-item-name")).sendKeys("is")
						await driver.findElement(by.css("#new-item-category")).click();
						await driver.findElement(by.css("#bageri")).click();
						await driver.findElement(by.css(".create-item-btn")).click();
						

		this.When(/^I choose to sort the shopping list by category on the sort dropdown$/, async function() {
		

    	await driver.findElement(by.css("#sort-dropdown")).click();
		await driver.findElement(by.css(".sort-category-btn")).click();	

		await sleep(5000);

		
		});


this.Then(/^the list should be sorted by category$/, async function() {

	  		let categoryTds = await driver.findElements(by.css('#item-list tbody tr td:nth-child(3)'));
		let categories = [];
		for(td of categoryTds) {
			let text = await td.getText();
			console.log(text);
			categories.push(text);
		}

		// Make a copy of names (will be a new array) and sort it
		let sortedCategories = categories.slice().sort();
		assert.deepEqual(categories,sortedCategories);
	});

};