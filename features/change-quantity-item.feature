Feature: Assigning a quantity to an item.
	As a user 
	I want to be able to assign the items quantity 
	so I know how many to buy.

	Scenario: A user should be able to assign a quantity to an item.
		Given that I have an item
		When I try to change the quantity of the item
		Then the item should change in quantity to reflect that input.
		And the item's quantity should not be below 0.

	Scenario: A user should be able to increase the quantity of an item.
		Given that I have an item
		When I try to increase the quantity of the item
		Then the items quantity should increase by 1
		And the item's quantity should not be below 0.

	Scenario: A user should be able to decrease the quantity of an item.
		Given that I have an item
		When I try to decrease the quantity of the item
		Then the items quantity should decrease by 1
		And the item's quantity should not be below 0.