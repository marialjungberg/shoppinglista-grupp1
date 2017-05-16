module.exports = class Item {
// An item that could be added to a shopping list.
// The item can have a name, a quantity and a category.

	constructor(name, quantity, category) {
		this.name = name;
		this.quantity = quantity;
		this.category = category;
	}
}