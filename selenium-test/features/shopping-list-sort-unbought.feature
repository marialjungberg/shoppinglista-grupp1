Feature: A user should be able to get a list of unbought items in a grocery list
	As a user I want to be able to get a list of the items I’ve not bought 
	so I know what I haven’t bought yet.
 
	Scenario: A user should be able to get a list of unbought items
		Given that I Am viewing a shopping list
		And that list has items that are both bought and not bought
		When I choose to filter the shopping list by not bought on the filter dropdown
		Then the list should only contain the items marked not bought
 
	Scenario: A user should get an empty list if there are no unbought items
		Given that I Am viewing a shopping list
		And that list has only bought items in it
		When I choose to filter the shopping list by not bought on the filter dropdown
		Then the list should be empty