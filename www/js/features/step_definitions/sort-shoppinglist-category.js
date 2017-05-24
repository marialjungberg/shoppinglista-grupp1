let assert = require("assert");
let {defineSupportCode} = require('cucumber');
let ShoppingList = require('../../shopping-list.js');
let Item = require('../../item.js');

// Code that tests sorting a shopping list in alphabetical order

defineSupportCode(function({Given, When, Then}) {

	let shoppingList;
	let sortedShoppingList;


	Given('that I have an unsorted grocery list with one or more items', function (callback) {

		shoppingList = new ShoppingList("Test1");
	
		for (let i = 5;i < 21;i += 5) {
			for (let j = i; j > i - 5;j--) {
				if (j < 10){
					shoppingList.addItem(new Item("Item0" + j,1,"Category0" + j));
				}
				else {
					shoppingList.addItem(new Item("Item" + j,1,"Category" + j));
				}
			}
		}

		callback();
	});

	When('I try to sort the list by category', function (callback) {

		sortedShoppingList = shoppingList.getSortCategory();

		callback();
	});

	Then('the list should be sorted by category ascending', function (callback) {

		// Test if the returned array is an array
		assert(Array.isArray(sortedShoppingList),"The returned object is not an array");

		// Test if the length of the returned array is same as for items array in shoppingList
		assert(
			sortedShoppingList.length === shoppingList.items.length,
			"The length of the returned array differs from the shopping list"
		);

		// Test if each item in the array is greater than previous item
		let rightOrder = true;

		for (let i = 0;i < sortedShoppingList.length - 1;i++) {
			if (sortedShoppingList[i].name > sortedShoppingList[i + 1].name) {
				rightOrder = false;
			}
		}

		assert(rightOrder,"The shopping list is not sorted");

		callback();
	});
});