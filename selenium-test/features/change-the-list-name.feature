Feature:  Change the list name
	As a user 
	I want to be able to change a list name 
	so I can organize my lists.
 
	Scenario: Change the name of my list
		Given that I have created a shopping list
		And clicked the pen button
		When I fill in the new name
		And click the OK button	
		Then the list should be called the new name
