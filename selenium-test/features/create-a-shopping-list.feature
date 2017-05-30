Feature: Create a shopping list
	As a user 
	I want to be able to create shopping lists 
	so I know what to buy.
 
	Scenario: 
		Given that i am viewing my shopping lists 
		When i input the name of the list 
		And push the plus button 
		Then the list should appear in the shopping list collection
 
 
	Scenario: Creating a shopping list without a name
		Given that i am viewing my shopping lists
		When i do not input the name of the list
		And push the plus button
		Then an error message is shown
