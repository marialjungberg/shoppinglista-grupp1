let assert = require("assert");
let {defineSupportCode} = require('cucumber');
let ShoppingList = require('../../shopping-list.js');


defineSupportCode(function({Given, When, Then}) {

	let shoppingList;

	Given('that I want to create a new shopping list', function (callback) {
         shoppingList = new ShoppingList();
         callback();
    });

    When('I create a new shopping list with a given name', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
    });

    Then('a new shopping list should be created', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
    });

    When('I create a new shopping list without a given name', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
    });

    Then('a new shopping list should not be created', function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
    });
});