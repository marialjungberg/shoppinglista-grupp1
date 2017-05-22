let assert = require("assert");
let {defineSupportCode} = require('cucumber');
let Item = require('../../item.js');

// Code that tests ...

defineSupportCode(function({Given, When, Then}) {

	let m_item;

	let m_firstquan = 1;
	let m_secondquan = 5;

	Given("that I have an Item", function(callback) {
		m_item = new Item("Item",m_firstquan,"A");

		assert(m_item != NULL, "Item could not be created.");

		assert(m_item.quantity != m_firstquan, "Item has the wrong starting quantity.");

		callback();
	});

	When("I try to change the quantity of the item", function(callback) {
		m_item.quantity = m_secondquan;

		callback();
	});

	Then("the item should change in quantity to reflect that input.", function(callback) {
		assert(m_item.quantity != m_firstquan, "Item quantity unchanged.");
		assert(m_item.quantity === m_secondquan, "Item quantity couldn't be changed correctly.");
		assert(m_item.quantity)

		callback();
	});

	Then("the item's quantity should not be below 0.", function(callback) {
		assert(m_item.quantity < 0, "Item quantity below 0.");

		callback();
	});

	When("I try to increase the quantity of the item", function(callback) {
		m_item.quantity += 1;

		callback();
	});

	Then("the items quantity should increase by 1", function(callback) {
		assert(m_item.quantity != m_firstquan, "Item quantity unchanged.");
		assert(m_item.quantity == (m_firstquan + 1), "Item quantity incorrect.");
	})

	When("I try to decrease the quantity of the item", function(callback) {
		m_item.quantity -= 1;

		callback();
	});

	Then("the items quantity should decrease by 1", function(callback) {
		assert(m_item.quantity != m_firstquan, "Item quantity unchanged.");
		assert(m_item.quantity == (m_firstquan + 1), "Item quantity incorrect.");
	})

});