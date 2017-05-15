let assert = require("assert");
let {defineSupportCode} = require('cucumber');
let ShoppingList = require('../../shopping-list.js');
let ShoppingListCollection = require('../../shopping-list-collection.js');

// Code that tests creating a new object of ShoppingList class
// and adding it to the ShoppingListCollection class

defineSupportCode(function({Given, When, Then}) {

	let shoppingListCollection;
	let runtimeError;
	let shoppingList1;
	let shoppingList2;

	Given('that I want to create a new shopping list', function (callback) {
		
		runtimeError = false;
		shoppingListCollection = new ShoppingListCollection();

		callback();
    });

    When('I create a new shopping list with a given name', function (callback) {

	    shoppingList1 = new ShoppingList("Test01");
	    shoppingListCollection.addShoppingList(shoppingList1);

		callback();
    });

    Then('a new shopping list should be created', function (callback) {

		// Test if a ShoppingList object has been created
		assert(shoppingList1 instanceof ShoppingList,"Object is not of type ShoppingList.");

		// Test if the name of the ShoppingList is Test01
		assert(shoppingList1.name === "Test01","Shopping list has wrong name.");

		callback();
    });

	Then('added to my collection of shopping lists', function (callback) {

		// Test if there is one ShoppingList in ShoppingListCollection
		assert(shoppingListCollection.shoppingLists.length === 1,"More or less than one object has been added to collection.");

		// Test if the item is a ShoppingList object
		assert(shoppingListCollection.shoppingLists[0] instanceof ShoppingList,"Object is not of type ShoppingList.");

		// Test if the name of the ShoppingList is Test01
		assert(shoppingListCollection.shoppingLists[0].name === "Test01","Shopping list has wrong name.");

		callback();
	});

    When('I create a new shopping list without a given name', function (callback) {

		try {
			shoppingList2 = new ShoppingList();
		}
		catch(e) {
			runtimeError = true;
		}

		callback();
    });

    Then('a new shopping list should not be created', function (callback) {

    	// Test if the type of shoppingList is undefined
    	assert(shoppingList2 === undefined,"ShoppingList object is supposed to be undefined.");

		callback();
    });

	Then('an error thrown', function (callback) {

    	// Test if ShoppingList class did threw an error
		assert(runtimeError,"No error thrown by ShoppingList class.");

		callback();
	});    
});