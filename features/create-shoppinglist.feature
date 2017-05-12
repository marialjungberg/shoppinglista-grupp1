Feature: Create a shopping list
	As a user 
	I want to be able to create shopping lists 
	so I know what to buy.

	Scenario: Creating a shopping list with a name
		Given that I want to create a new shopping list
		When I create a new shopping list with a given name
		Then a new shopping list should be created
		And added to my collection of shopping lists

	Scenario: Creating a shopping list without a name
		Given that I want to create a new shopping list
		When I create a new shopping list without a given name
		Then a new shopping list should not be created
		And an error thrown
