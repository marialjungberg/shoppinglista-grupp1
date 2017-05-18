let assert = require("assert");
let {defineSupportCode} = require('cucumber');
// Copy this row and edit it for each class you are using
let ShoppingList = require('../../shopping-list.js');
let Item = require('../../item.js');

// Code that tests ...

defineSupportCode(function({Given, When, Then}) {

	//list with 3 items, item2 is marked as bought.
	let sl = new ShoppingList("SL");
	let i1 = new Item("Item1",1,"A");
	let i2 = new Item("Item2",2,"B");
	i2.bought = true;
	let i3 = new Item("Item3",3,"C");
	sl.addItem(i1);
	sl.addItem(i2);
	sl.addItem(i3);

	Given('that I have a grocery list with one or more items', function (callback) {
        assert(sl.items.length > 0, "There's no items in the list");
        callback();
    });

	Given('at least one of those items is not marked as bought', function (callback) {
        for(let item of sl.items){
        	if(!item.bought){
        		callback();
        	}
        }
        callback(new Error("There's no item marked as not bought"));
    });

	When('I mark one of items in that is not marked as bought', function (callback) {
        sl.markItemBought("Item1");
        callback();
    });

	Then('it should be marked as bought', function (callback) {
        assert(sl.items[0].bought === true, "the item is not marked as bought");
        callback();
    });

	Given('at least one of those items is marked as bought', function (callback) {
        for(let item of sl.items){
        	if(item.bought){
        		callback();
        	}
        }
        callback(new Error("There's no item marked as bought"));
    });

	When('I mark one of items in that is marked as bought', function (callback) {
        sl.markItemBought("Item2");
        callback();
    });

	Then('it should be marked as not bought', function (callback) {
        assert(sl.items[1].bought === false, "the item is marked as bought");
        callback();
    });

});