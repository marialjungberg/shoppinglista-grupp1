Feature: A user should be able to sort their grocery list according to category
As a user
I want to be able to sort my list according to their category
so I can find my items easily when I’m looking for a specific type of item.

Scenario: Sort a list according by category
Given that I’m viewing a shopping list with two or more items that is not sorted by category
When I choose to sort the shopping list by category on the sort dropdown
Then the list should be sorted by category