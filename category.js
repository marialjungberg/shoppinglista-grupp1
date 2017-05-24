class Category {
// An item that could be added to a shopping list.
// The item can have a name, a quantity and a category.

	constructor(name) {
		this.name = name;
	}
}

if(typeof module !== "undefined"){
	module.exports = Category;
}