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
  let i5 = new Item("Item5",5,"E");
  i5.bought = true;
  let i6 = new Item("Item6",6,"F");
  i6.bought = true;
  sl.addItem(i1);
  sl.addItem(i2);
  sl.addItem(i3);

  //list with 3 items, no item marked as unbought.
  let sl3 = new ShoppingList("SL2");
  sl3.addItem(i2);
  sl3.addItem(i5);
  sl3.addItem(i6);

  let sl2 = new ShoppingList("SL3");

	Given('that I have a grocery list with one or more unbought items in it', function (callback) {    
        for(let item of sl.items){
            if(!item.bought){
                callback();
            }
        }
        callback(new Error("There's no item marked as not bought"));
    });

	When('I try to get a list of the items I’ve not bought', function (callback) {
        sl2.items = sl.getNotBoughtItems();
        callback();
    });

	Then('I should get a list of all unbought items from my grocery list', function (callback) {
        for(let item of sl2.items){
            if(item.bought){
                callback(new Error("The new list contains items that has been bought"));    
            }
        }
        callback();
    });

	Given('that I have a grocery list with no unbought items in it', function (callback) {
        for(let item of sl3.items){
            if(!item.bought){
                callback(new Error("The list contains items that is unbought"));
            }
        }
        callback();
    });

});