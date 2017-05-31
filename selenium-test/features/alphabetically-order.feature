Feature: User should be able to sort list alphabetically
	As a user
	I want to be able to sort my list alphabetically order
	so I can find my items easily.

	Scenario: Sort an unsorted list
		Given that I’m viewing a shopping list with two or more items that is not sorted by name
		When I choose to sort the shopping list by name on the sort dropdown
		Then the list should be sorted by name