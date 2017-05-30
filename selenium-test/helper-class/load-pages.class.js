module.exports = class LoadPages {

	constructor(helpers,driver,by){
		this.helpers = helpers;
		this.driver = driver;
		this.by = by;
	}

	async twoItems(){
		let helpers = this.helpers, driver = this.driver, by = this.by;
		await helpers.loadPage('http://localhost:3000');
		await driver.findElement(by.css("#new-shoppinglist-name")).sendKeys("Color test", selenium.Key.ENTER);
		await driver.findElement(by.css("#collection-list")).click();
		await driver.findElement(by.css("#new-item-name")).sendKeys("test 1", selenium.Key.ENTER);
		await driver.findElement(by.css("#new-item-name")).sendKeys("test 2", selenium.Key.ENTER);
	}


	async oneItem(name){
		let helpers = this.helpers, driver = this.driver, by = this.by;
		await helpers.loadPage('http://localhost:3000');
		await driver.findElement(by.css("#new-shoppinglist-name")).sendKeys("Color test", selenium.Key.ENTER);
		await driver.findElement(by.css("#collection-list")).click();
		await driver.findElement(by.css("#new-item-name")).sendKeys(name, selenium.Key.ENTER);
}

	async oneList(){
		let helpers = this.helpers, driver = this.driver, by = this.by;
		await helpers.loadPage('http://localhost:3000');
		await driver.findElement(by.css("#new-shoppinglist-name")).sendKeys("Color test", selenium.Key.ENTER);

	}

}