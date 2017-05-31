Feature: Visible add item list
	As a user 
	I want the “add item to list” to be visible at all time 
	so I can add items easily.
	 
	Scenario:
		Given that I’m viewing a shopping list
		When the shopping list is longer than the screen height
		Then the input bar should be visible