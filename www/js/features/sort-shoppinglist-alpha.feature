Feature: User should be able to sort list alphabetically
	As a user 
	I want to be able to sort my list alphabetically order 
	so I can find my items easily.

	Scenario: Sort an unsorted list
		Given that I have a grocery list with more than one item that has not been sorted alphabetically
		When I sort them alphabetically
		Then the list should be sorted alphabetically ascending
