Feature: Assign category to items
	As a user 
	I want to be able to assign the items category 
	so I can find them in the store.

	Scenario: A user should be able to assign a category to an item.
		Given that I have an item
		When I assign a category to that item
		Then the item should have that category.

	Scenario: A user should be able to change the category of an item.
		Given that I have an item with a category
		When I change the category of that item
		Then the item should have the new category.