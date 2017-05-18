Feature: Delete a shopping list
	As a user 
	I want to be able to delete a shopping list 
	so I don’t have to keep them forever.

	Scenario: Delete a shopping list
		Given that I want to delete a shopping list
		When I delete my list
		Then the the list with the old name will disappear
