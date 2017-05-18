let ShoppingList = require('./shopping-list.js');

module.exports = class ShoppingListCollection {
// A collection of shopping lists

	constructor() {
		this.shoppingLists = [];
	}
	
	addShoppingList(shoppingList) {
	// add a shoppinglist to the collection of shoppingLists

		this.shoppingLists.push(shoppingList);
	}

	deleteShoppingList(name) {
		for(let i = 0; i < this.shoppingLists.length; i++){
			if(this.shoppingLists[i].name === name){
				this.shoppingLists.splice(i, 1);
			}
		}
	}
}