class App {
// A class that handles functions and holds information for the
// shopping list application

	constructor() {
		this.shoppingListCollection = new ShoppingListCollection();
	}

	createShoppingList() {
		let shoppingListName = $("#new-shoppinglist-name").val();
		let shoppingList = new ShoppingList(shoppingListName);
		console.log(this);
		this.shoppingListCollection.addShoppingList(shoppingList);
	}
}
