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
		await driver.findElement(by.css("#new-shoppinglist-name")).sendKeys("Djur till middag", selenium.Key.ENTER);
		await driver.findElement(by.css("#collection-list")).click();
		await driver.findElement(by.css("#new-item-name")).sendKeys("björn")
		await driver.findElement(by.css("#new-item-category")).click();
		await driver.findElement(by.css(".bageri")).click();

});
this.When(/^I choose to sort the shopping list by category on the sort dropdown$/, async function() {
});

this.Then(/^the list should be sorted by category$/, async function() {
	});
};