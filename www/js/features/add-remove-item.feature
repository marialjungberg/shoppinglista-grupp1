Feature: Add and remove an item
	As a user 
	I want to be able to add and remove items from my shopping list 
	so I can edit my list.

	Scenario: Remove an item from the shopping list
		Given that i want to remove an item from my list
		When i remove an item
		Then the item from the list will not be found

	Scenario: Add item with same name as another item
		Given that I want to add an item to my list that has the same name as an item in the list
		When I add the item
		Then the item will not be added to the list

	Scenario: Add a new item to the list
		Given that I want to add an item to my list that doesn't exist in the list
		When I add the item
		Then the item will be added to the list
