Feature: A user should be able to get a list of bought items in a grocery list
	As a user 
	I want to be able to get a list of the items I’ve bought 
	so I can plan my purchases.
	
	Scenario: A user should be able to get a list of bought items
		Given that I have a grocery list with one or more bought items in it
		When I try to get a list of the items I’ve bought
		Then I should get a list of all bought items from my grocery list
	
	Scenario: A user should get an empty list if there are no bought items
		Given that I have a grocery list with no bought items in it
		When I try to get a list of the items I’ve bought
		Then I should get an empty list of items
	
	Scenario: A user should not get any unbought items in the list of bought items
		Given that I have a grocery list with both bought and unbought items in it
		When I try to get a list of the items I’ve bought
		Then I should get a list with bought items with no unbought items
