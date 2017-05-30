Feature: A user should be able to get a list of bought items in a grocery list
	As a user
	I want to be able to get a list of the items I’ve bought
	so I can plan my purchases.

	Scenario: A user should be able to get a list of bought items
		Given that I’m viewing a shopping list with items that are both bought and not bought
		When I choose to filter the shopping list by bought on the filter dropdown
		Then the list should only contain the bought items

	Scenario: A user should get an empty list if there are no bought items
		Given that I’m viewing a grocery list with no bought items in it
		When I choose to filter the shopping list by bought on the filter dropdown
		Then the list should be empty