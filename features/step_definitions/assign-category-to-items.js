let assert = require("assert");
let {defineSupportCode} = require('cucumber');
let Item = require('../../item.js');
let ShoppingList = require('../../shopping-list.js');

// Code that tests ...

defineSupportCode(function({Given, When, Then}) {

	let item1 = new Item("Mjölk", 2, "Godis");
	let item2 = new Item();

    Given('that I have an item', function (callback) {
        assert(item2 != null, "I don't have an item!");
        callback();
    });

    When('I assign a category to that item', function (callback) {
        item2.category="elektronik";
        callback();
     });

    Then('the item should have that category.', function (callback) {
        assert(item2.category === "elektronik", "The item doesn't have that category");
        callback();
    });

	Given('that I have an item with a category', function (callback) {
        assert(item1.category != null, "The item has no category");
        callback();
    });

	When('I change the category of that item', function (callback) {
        item1.category="Mejeri";
        callback();
    });

	Then('the item should have the new category.', function (callback) {
        assert(item1.category === "Mejeri", "The item don't have the new category");
        callback();
    });
});