Feature: A user should be able to sort their grocery list according to category
	As a user 
	I want to be able to sort my list according to their category 
	so I can find my items easily when I’m looking for a specific type of item.

	Scenario: Sort an unsorted list according by category
		Given that I have an unsorted grocery list with one or more items
		When I try to sort the list by category
		Then the list should be sorted by category ascending
