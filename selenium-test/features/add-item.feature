Feature: Remove an item
	As a user 
	I want to be able to add and remove items from my shopping list 
	so I can edit my list.

	Scenario: Remove an item from the shopping list
		Given that I am viewing a shopping list with one or more items
		When I click the trash button
		And click the OK button in the modal
		Then the item should be removed from the shopping list

	Scenario: Add an item from the shopping list
		Given that I am viewing a shopping list
		When I fill in name, quantity, unit and category
		And click the “+” button
		Then the item should be added to the shopping list

	Scenario: Adding an item with the same name
		Given that I am viewing a shopping list
		When I fill in a name that already exists in the shopping list
		And click the “+” button
		Then it should not be added to the shopping list
		And an error message is shown