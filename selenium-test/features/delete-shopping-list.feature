Feature: Delete a shopping list
	As a user 
	I want to be able to delete a shopping list 
	so I don’t have to keep them forever.

	Scenario: Delete a shopping list
		Given that I have created a shopping list
		When I clicked the trash button
		And click the OK button on the modal
		Then the list should be removed from the shopping list collection
