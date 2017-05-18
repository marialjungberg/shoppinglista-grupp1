module.exports = class ShoppingList {
// A shopping list with a name

	constructor(name) {
		if (typeof name !== "string" || name === "") {
			throw new Error("A shoppinglist must have a name that is a non-empty string.");
		}
		
		this.name = name;
		this.items = [];
	}

	// rename the shopping list
	renameList(name) {

		if (typeof name !== "string" || name === "") {
			throw new Error("A shoppinglist must have a name that is a non-empty string.");
		}

		this.name = name;
	}

	// add an item to the items array
	addItem(item) {

		this.items.push(item);
	}

	// remove an item from the items array by name
	removeItem(name) {

		let itemIndex = -1;

		// Loop to find an item with that name
		for (let i = 0;i < this.items.length && itemIndex === -1;i++) {
			if (this.items[i].name === name) {
				itemIndex = i;
			}
		}

		// If an item was found, remove the item
		if (itemIndex > -1) {
			this.items.splice(itemIndex,1);
		}
	}

	getSortAlphabetically() {}

	markItemBought(name){
		for(let i = 0; i < this.items.length; i++){
			if(this.items[i].name === name){
				this.items[i].bought = !this.items[i].bought;
			}
		}

	}

}