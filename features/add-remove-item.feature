Feature: Add and remove an item
	As a user 
	I want to be able to add and remove items from my shopping list 
	so I can edit my list.

	Scenario: Add and remove items from the shopping list
		Given that i want to remove an item from my list
		When i remove an item
		Then the item from the list will not be found

	Scenario: Add and remove items from the shopping list
		Given that I want to add an item to my shopping list
		When I add an item 
		Then the item will be found in the shopping list
