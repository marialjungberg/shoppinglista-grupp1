Feature: Change quantity on a item
	As a user
	I want to be able to assign the items quantity
	so I know how many to buy.

	Scenario: A user should be able to assign a quantity to an item.
		Given that I am viewing a shopping list with one or more items
		When I try to change the quantity on one of the rows quantity field
		Then the item should be updated with the new quantity