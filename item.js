module.exports = class Item {
// An item that could be added to a shopping list.
// The item can have a name, a quantity and a category.

	constructor(name, quantity, category) {
		this.name = name;
		this.quantity = quantity;
		this.category = category;
	}

	set category(val){
		if(typeof val != "string" || val.length < 0){
			throw(new Error("Bad name!"));
		}
		this._category = val;
	}

	get category(){
		return this._category;
	}

	set name(name){
		this._name = name;
	}

	get name(){
		return this._name;
	}

}