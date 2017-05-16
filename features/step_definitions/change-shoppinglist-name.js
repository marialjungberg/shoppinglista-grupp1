let assert = require("assert");
let {defineSupportCode} = require('cucumber');

// Copy this row and edit it for each class you are using
let ShoppingList = require('../../shopping-list.js');

// Code that tests changing name of a ShoppingList

defineSupportCode(function({Given, When, Then}) {

	let shoppingList;

	Given('that I have a shopping list', function (callback) {

		shoppingList = new ShoppingList("Test01");

		callback();
	});

	When('I change the name of the list', function (callback) {

		shoppingList.renameList("Groceries");

		callback();
	});

	Then('there will be a list with the new name', function (callback) {

		// Test if the name of the shopping list has been changed
		assert(shoppingList.name === "Groceries","the name of the shopping list has not been changed");

		callback();
	});
	
});