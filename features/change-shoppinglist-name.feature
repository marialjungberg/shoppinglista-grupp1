Feature: Change the list name
	As a user 
	I want to be able to change a list name 
	so I can organize my lists.

	Scenario: Change the name of my list
		Given that I have a shopping list
		When I change the name of the list
		Then there will be a list with the new name
