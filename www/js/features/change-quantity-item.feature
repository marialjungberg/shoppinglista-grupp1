Feature: Assigning a quantity to an item.
	As a user 
	I want to be able to assign the items quantity 
	so I know how many to buy.

	Scenario: A user should be able to assign a quantity to an item.
		Given that I have an Item with a starting quantity of 3
		When I try to change the quantity of the item to 5
		Then the item should change in quantity to reflect that input.
		And the item's quantity should not be below 0.

	Scenario: A user should be able to increase the quantity of an item.
		Given that I have an Item with a starting quantity of 3
		When I try to increase the quantity of the item by 5
		Then the items quantity should increase by 5
		And the item's quantity should not be below 0.

	Scenario: A user should be able to decrease the quantity of an item.
		Given that I have an Item with a starting quantity of 3
		When I try to decrease the quantity of the item by 5
		Then the items quantity should decrease by 5
		And the item's quantity should not be below 0.

	Scenario: A user shouldn't be able to assign a string as the quantity of an item.
		Given that I have an Item with a starting quantity of 3
		When I try to change the quantity of the item to a string
		Then the item's quantity should remain unchanged
		And the item quantity should still be a number.