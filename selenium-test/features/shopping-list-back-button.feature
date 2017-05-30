Feature: Back button in shopping list
As a user 
I want a back button to be displayed when I am in a list 
so that I can view all my lists again.
 
Scenario:
	Given that I’m viewing a shopping list
	When I click the back button
	Then the shopping lists collection page should be visible