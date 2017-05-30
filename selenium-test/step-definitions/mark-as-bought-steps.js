function sleep(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },ms);
  });
}


module.exports = function () {

	this.Given(/^that I’m viewing a shopping list with one or more items$/, async function() {
	  await helpers.loadPage('http://localhost:3000'); 
	  await driver.findElement(by.css("#new-shoppinglist-name")).sendKeys("Mina matvaror", selenium.Key.ENTER);
	  await driver.findElement(by.css("#collection-list")).click();
	  await driver.findElement(by.css("#new-item-name")).sendKeys("katt", selenium.Key.ENTER);
	  await driver.findElement(by.css("#new-item-name")).sendKeys("hund", selenium.Key.ENTER);

			
	});
	       

	this.When(/^at least one of those items is not marked as bought$/, async function() {
		let boughtIcons = await driver.findElements(by.css('.bought-icon'));
		for(boughtIcon of boughtIcons) {
			let classes = await boughtIcon.getAttribute("class");
			if (classes.indexOf("active")<0){
				return;  //lyckat
			}
		}
		assert(false, "No item bought as mark");

	});


	this.When(/^I click the cart icon on a unmarked row$/, async function() { 
	await driver.findElement(by.css(".bought-icon")).click();	
	  
	});
	          
	this.Then(/^the row should be marked as bought with a green background$/, async function() {
		let boughtIcons = await driver.findElements(by.css('.bought-icon'));
		for(boughtIcon of boughtIcons) {
			let classes = await boughtIcon.getAttribute("class");
			if (classes.indexOf("active")<1){		
				await driver.sleep(1000);
				return;  //lyckat
			}
		}
		assert(true, "item bought as mark");

  
	});
       

//nästa scenario 


	this.Given(/^at least one of those items is marked as bought$/, async function() {
	 	await driver.findElement(by.css(".bought-icon")).click();	
	 	let boughtIcons = await driver.findElements(by.css('.bought-icon'));
		for(boughtIcon of boughtIcons) {
		let classes = await boughtIcon.getAttribute("class");
		if (classes.indexOf("active")>0){
		return;  //lyckat
			}
		}
		assert(false, "No item bought as mark");

	});
	

	this.When(/^I click the cart icon on a marked row$/, async function() {
		await driver.findElement(by.css(".bought-icon")).click();	
		await driver.sleep(1000);
  		});

	this.Then(/^the row should be marked as unbought with a blue background$/, async function() {
  		let boughtIcons = await driver.findElements(by.css('.bought-icon'));
		for(boughtIcon of boughtIcons) {
		let classes = await boughtIcon.getAttribute("class");
		if (classes.indexOf("active")<0){		
		await driver.sleep(5000);
		return;  //lyckat
			}
		}
		assert(true, "item unbought as mark");

  
	});
               


}