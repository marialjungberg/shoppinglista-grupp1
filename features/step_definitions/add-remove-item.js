let assert = require("assert");
let {defineSupportCode} = require('cucumber');
let Item = require('../../item.js');
let ShoppingList = require('../../shopping-list.js');

// Code that tests adding and removing items to/from the shopping list

defineSupportCode(function({Given, When, Then}) {

	let shoppingList1;
	let shoppingList2;
	let item01;
	let item02;
	let item03;
	let item04;
	let lengthOfItems;

	Given('that i want to remove an item from my list', function (callback) {

		shoppingList1 = new ShoppingList("Test1");
		item01 = new Item("Item01",1,"A");
		shoppingList1.addItem(item01);
		item02 = new Item("Item02",2,"B");
		shoppingList1.addItem(item02);
		item03 = new Item("Item03",3,"C");
		shoppingList1.addItem(item03);
		lengthOfItems = shoppingList1.items.length;

		callback();
	});

	When('i remove an item', function (callback) {

		shoppingList1.removeItem("Item01");

		callback();
	});

	Then('the item from the list will not be found', function (callback) {

		// Test if one object has been removed to the shopping list
		assert(
			shoppingList1.items.length === lengthOfItems - 1,
			"More or less than one item has been removed from the shopping list."
		);

		// Test if the shopping list still contains an item with that name
		let stillLeft = false;
		for (let item of shoppingList1.items) {
			if (item.name = "Item01") {
				stillLeft = true;
			}
		}
		assert(stillLeft,"The item is still in the shopping list.");

		callback();
	});

	Given('that I want to add an item to my shopping list', function (callback) {
		
		shoppingList2 = new ShoppingList("Test2");
		item04 = new Item("Item04",4,"Test");

		callback();
	});

	When('I add an item', function (callback) {

		shoppingList2.addItem(item04);

		callback();
	});

	Then('the item will be found in the shopping list', function (callback) {

		// Test if one object has been added to the shopping list
		assert(shoppingList2.items.length === 1,"More or less than one item has been added to the shopping list.");

		// Test if it is an Item object
		assert(shoppingList2.items[0] instanceof Item,"Object is not of type Item.");

		// Test if the name is correct
		assert(shoppingList2.items[0].name === "Item04","Item has wrong name.");

		// Test if the quantity is correct
		assert(shoppingList2.items[0].quantity === 4,"Item has wrong quantity.");

		// Test if the category is correct
		assert(shoppingList2.items[0].category === "Test","Item has wrong category.");

		callback();
	});

});