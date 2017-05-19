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
	addItem(tmpItem) {
		for(let item of this.items){
			if(item.name === tmpItem.name){
				throw new Error("The new Item has the same name as the one of the items in the list!");
			}
		}
		this.items.push(tmpItem);
	}

	getBoughtItems(){
		let arr = [];
		for(let item of this.items){
			if(item.bought){
				arr.push(item);
			}
		}
		return arr;
	}

	getNotBoughtItems(){
		let arr = [];
		for(let item of this.items){
			if(!item.bought){
				arr.push(item);
			}
		}
		return arr;
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

	getSortAlphabetically() {
		let sortedArray = [];
		sortedArray = this.items.slice();

		sortedArray.sort(
			function(a, b) {
				var nameA = a.name.toUpperCase(); // ignore upper and lowercase
				var nameB = b.name.toUpperCase(); // ignore upper and lowercase
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}

				// names must be equal
				return 0;
			}
		);

		return sortedArray;
	}

	markItemBought(name){
		for(let i = 0; i < this.items.length; i++){
			if(this.items[i].name === name){
				this.items[i].bought = !this.items[i].bought;
			}
		}

	}

}