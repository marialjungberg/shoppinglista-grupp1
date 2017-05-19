Feature: A user should be able to get a list of unbought items in a grocery list
	As a user 
	I want to be able to get a list of the items I’ve not bought 
	so I know what I haven’t bought yet.

	Scenario: A user should be able to get a list of unbought items
		Given that I have a grocery list with one or more unbought items in it
		When I try to get a list of the items I’ve not bought
		Then I should get a list of all unbought items from my grocery list

	Scenario: A user should get an empty list if there are no unbought items
		Given that I have a grocery list with no unbought items in it
		When I try to get a list of the items I’ve not bought
		Then I should get an empty list of items

	Scenario: A user should not get any bought items in the list of bought items
		Given that I have a grocery list with both bought and unbought items in it
		When I try to get a list of the items I’ve not bought
		Then I should get a list of all unbought items from my grocery list
