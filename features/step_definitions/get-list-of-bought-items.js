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
	let i4 = new Item("Item4",4,"D");
	sl.addItem(i1);
	sl.addItem(i2);
	sl.addItem(i3);

	//list with 3 items, no item marked as bought.
	let sl3 = new ShoppingList("SL2");
	sl3.addItem(i1);
	sl3.addItem(i3);
	sl3.addItem(i4);

	let sl2 = new ShoppingList("SL3");

	Given('that I have a grocery list with one or more bought items in it', function (callback) {
        for(let item of sl.items){
        	if(item.bought){
        		callback();
        	}
        }
        callback(new Error("There's no item marked as bought"));
    });

	When('I try to get a list of the items I’ve bought', function (callback) {
        sl2.items = sl.getBoughtItems();
        callback();
    });

	Then('I should get a list of all bought items from my grocery list', function (callback) {
        for(let item of sl2.items){
        	if(!item.bought){
        		callback(new Error("The new list contains items that has not been bought"));	
        	}
        }
        callback();
    });

	Given('that I have a grocery list with no bought items in it', function (callback) {
        for(let item of sl3.items){
        	if(item.bought){
        		callback(new Error("The list contains items that has been bought"));
        	}
        }
        callback();
    });

	Then('I should get an empty list of items', function (callback) {
        sl2.items = sl3.getBoughtItems();
        assert(sl2.items.length === 0, "The list is not empty");
        callback();
    });

	Given('that I have a grocery list with both bought and unbought items in it', function (callback) {
        let boolBought = false;
        let boolNotBought = false;
        for(let item of sl.items){
        	if(item.bought){
        		boolBought = true;
        	} else {
        		boolNotBought = true;
        	}
        }

        if(boolBought && boolNotBought){
        	callback();
        }else if(!boolBought){
        	callback(new Error("The list doesn't contain items that has been bought"));
        }else if(!boolNotBought){
        	callback(new Error("The list doesn't contain items that has not been bought"));
        }
    });

	Then('I should get a list with bought items with no unbought items', function (callback) {
        for(let item of sl2.items){
        	if(!item.bought){
        		callback(new Error("The new list contains items that has not been bought"));	
        	}
        }
        callback();
    });
});