Feature: 
	As a user 
	I want to be able to assign the items name 
	so I know what item it is.

	Scenario: A user should be able to assign a name to an item.
		Given that I have an item.
		When I try to change the items name
		Then the items name should be changed to the new one.