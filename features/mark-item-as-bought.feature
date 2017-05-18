Feature: A user should be able to mark an item on a grocery list as bought
	As a user 
	I want to be able to mark the items as bought 
	so I don’t buy them twice.

	Scenario: Mark an item as bought
		Given that I have a grocery list with one or more items
		And at least one of those items is not marked as bought
		When I mark one of items in that is not marked as bought
		Then it should be marked as bought

	Scenario: Mark an item as bought
		Given that I have a grocery list with one or more items
		And at least one of those items is marked as bought
		When I mark one of items in that is marked as bought
		Then it should be marked as not bought
