Feature: A user should be able to mark an item on a grocery list as bought
	As a user
	I want to be able to mark the items as bought
	so I don’t buy them twice.

	Scenario: Mark an item as bought
		Given that I’m viewing a shopping list with one or more items
		And at least one of those items is not marked as bought
		When I click the cart icon on a unmarked row
		Then the row should be marked as bought with a green background

	Scenario: Mark an item as not bought
		Given that I’m viewing a shopping list with one or more items
		And at least one of those items is marked as bought
		When I click the cart icon on a marked row
		Then the row should be marked as unbought with a blue background