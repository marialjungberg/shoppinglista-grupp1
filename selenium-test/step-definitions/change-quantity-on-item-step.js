module.exports = function () {

	this.Then(/^I try to change the quantity on one of the rows quantity field$/, async function() {
  		await driver.findElement(by.css("#item-quantity")).sendKeys("12", selenium.Key.ENTER);
	});

	this.Then(/^the item should be updated with the new quantity$/, async function() {
 		let inputs = await driver.findElements(by.css("#item-quantity"));
 		let found = false;
 		for(input of inputs){
 			value = await input.getAttribute("value");
 			if(value === "112") { 
 				found=true; 
 				break; 
 			}
 		}
 		assert(found, "fel nummer");
	});

}