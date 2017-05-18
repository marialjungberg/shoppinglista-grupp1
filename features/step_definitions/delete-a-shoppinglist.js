let assert = require("assert");
let {defineSupportCode} = require('cucumber');
let ShoppingList = require('../../shopping-list.js');
let ShoppingListCollection = require('../../shopping-list-collection.js');


defineSupportCode(function({Given, When, Then}) {

	let shoppingListCollection = new ShoppingListCollection( );
	let shoppingList1 = new ShoppingList("Test01");
	shoppingListCollection.addShoppingList(shoppingList1);



	Given('that I want to delete a shopping list', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });

	When('I delete my list', function (callback) {
		shoppingListCollection.deleteShoppingList("Test01");
        callback();
    });

	Then('the the list with the old name will disappear', function (callback) {
		for(let shoppingList of shoppingListCollection.shoppingLists){
			assert(shoppingList.name != "Test01", "Shopping list was not removed.");
		}
        callback();
    });

});