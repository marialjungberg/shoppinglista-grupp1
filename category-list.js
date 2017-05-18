module.exports = class CategoryList {
// An item that could be added to a shopping list.
// The item can have a name, a quantity and a category.

	constructor() {
		this.categories = [];
	}

	addCategory(category) {
		this.categories.push(category);
	}

	removeCategory(name) {
		for(let i = 0; i < this.categories.length; i++){
			if(this.categories[i].name === name){
				this.categories.splice(i, 1);
			}
		}
	}
}