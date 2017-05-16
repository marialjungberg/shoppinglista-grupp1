module.exports = class ShoppingList {
// A shopping list with a name

	constructor(name) {
		if (typeof name !== "string" || name === "") {
			throw new Error("A shoppinglist must have a name that is a non-empty string.");
		}
		
		this.name = name;
	}

	renameList(name) {
		if (typeof name !== "string" || name === "") {
			throw new Error("A shoppinglist must have a name that is a non-empty string.");
		}

		this.name = name;
	}
}