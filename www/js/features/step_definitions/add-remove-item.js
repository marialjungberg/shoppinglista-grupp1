let assert = require("assert");
let {defineSupportCode} = require('cucumber');
let Item = require('../../item.js');
let ShoppingList = require('../../shopping-list.js');

// Code that tests adding and removing items to/from the shopping list

defineSupportCode(function({Given, When, Then}) {

	let shoppingList1 = new ShoppingList("Test1");
	let item01 = new Item("Item01",1,"A");
	shoppingList1.addItem(item01);
	let item02 = new Item("Item02",2,"B");
	shoppingList1.addItem(item02);
	let item03 = new Item("Item03",3,"C");
	shoppingList1.addItem(item03);
	let item04;
	let lengthOfItems;
		console.warn(shoppingList1);

	Given('that i want to remove an item from my list', function (callback) {

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
			if (item.name === "Item01") {
				stillLeft = true;
			}
		}
		assert(!stillLeft,"The item is still in the shopping list.");

		callback();
	});

	Given('that I want to add an item to my list that has the same name as an item in the list', function (callback) {
		
		
		item04 = shoppingList1.items[0];

		callback();
	});

	Given('that I want to add an item to my list that doesn\'t exist in the list', function (callback) {

        item04 = new Item("New item",1,"Cat");
        callback();
    });

	When('I add the item', function (callback) {
		try{
			shoppingList1.addItem(item04);
		}catch(err){
		}

		callback();
	});

	Then('the item will be added to the list', function (callback) {
		for(let tempItem of shoppingList1.items){
			if(tempItem.name === "New item"){
				callback();
			}
		}
		callback(new Error("The item has not been added"));
	});

	Then('the item will not be added to the list', function (callback) {
        
		if(shoppingList1.items.length === 3){
			callback(new Error("The item has been added"));
		}
        callback();
    });
});