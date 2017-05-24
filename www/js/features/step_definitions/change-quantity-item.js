let assert = require("assert");
let {defineSupportCode} = require('cucumber');
let Item = require('../../item.js');

// Code that tests ...

defineSupportCode(function({Given, When, Then}) {

	let m_item;

	let m_startquan = 0;
	let m_quanset = 0;

	Given("that I have an Item with a starting quantity of 3", function(callback) {
		m_item = new Item("Item", 3, "A");

		m_startquan = 3;

		assert(m_item != null, "Item could not be created.");

		assert(m_item.quantity == 3, "Item has the wrong starting quantity. It's supposed to be " + 3 + " but instead it's " + m_item.quantity + ".");

		callback();
	});

	When("I try to change the quantity of the item to 5", function(callback) {
		m_item.quantity = 5;
		m_quanset = 5;

		callback();
	});

	Then("the item should change in quantity to reflect that input.", function(callback) {
		assert(m_item.quantity != m_startquan, "Item quantity unchanged.");
		assert(m_item.quantity == m_quanset, "Item quantity is " + m_item.quantity + " it's supposed to be " + m_quanset + ".");

		callback();
	});

	Then("the item's quantity should not be below 0.", function(callback) {
		assert(m_item.quantity >= 0, "Item quantity below 0. " + m_item.quantity + ".");

		callback();
	});

	When("I try to increase the quantity of the item by 5", function(callback) {
		m_item.quantity += 5;

		m_quanset = 5;

		callback();
	});

	Then("the items quantity should increase by 5", function(callback) {
		assert(m_item.quantity != m_startquan, "Item quantity unchanged.");
		assert(m_item.quantity == (m_startquan + 5), "Item quantity incorrect.");

		callback();
	})

	When("I try to decrease the quantity of the item by 5", function(callback) {
		m_item.quantity -= 5;

		callback();
	});

	Then("the items quantity should decrease by 5", function(callback) {
		assert(m_item.quantity != m_startquan, "Item quantity unchanged.");
		if (m_startquan < 5) {
			assert(m_item.quantity == 0, "Item quantity incorrect.")
		}
		else {
			assert(m_item.quantity == (m_startquan - 5), "Item quantity incorrect.");
		}

		callback();
	});

	When("I try to change the quantity of the item to a string", function(callback) {
		m_item.quantity = "Tangerines";

		callback();
	});

	Then("the item's quantity should remain unchanged", function(callback) {
		assert(m_item.quantity == 3, "Item quantity should not have been changed.")
	});

	Then("the item quantity should still be a number.", function(callback) {
		assert(typeof m_item.quantity == "number", "Item quantity set to string.");
	})

});