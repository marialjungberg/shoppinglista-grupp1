let assert = require("assert");
let {defineSupportCode} = require('cucumber');
// Copy this row and edit it for each class you are using
let Item = require('../../item.js');

// Code that tests ...

defineSupportCode(function({Given, When, Then}) {

	//let myList = new ShoppingList('Fredagsmys');
    let item;

	 Given('that I have an item.', function (callback) {
        //myList.addItem('Banan');
        item = new Item ("äpple",1,"frukt");
        callback();
    });

	When('I try to change the items name', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        //myList.renameItem('Banan','Bananer');
        item.name ="päron";
        callback();
    });

    Then('the items name should be changed to the new one.', function (callback) {
        // Hard to write a good test before we agree on what type of object
        // an items is? (We have no class for shopping list items yet...)
        assert(item.name === "päron");
        callback();
    });


});