 Feature: Different row colors
	As a user 
	I want the rows in the list to differ slightly in color 
	so that I can read them easily.
 
	Scenario:
		Given that I’m viewing a shopping list with two or more items
		When look at the list
		Then every second row should be in a different color
