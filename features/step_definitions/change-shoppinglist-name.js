let assert = require("assert");
let {defineSupportCode} = require('cucumber');

// Copy this row and edit it for each class you are using
let ShoppingList = require('../../shopping-list.js');

// Code that tests ...

defineSupportCode(function({Given, When, Then}) {

	Given('that I have a shopping list', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });
	When('I change the name of the list', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });
	Then('there will be a list with the new name', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });
	
});