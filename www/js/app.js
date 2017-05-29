class App {
// A class that handles functions and holds information for the
// shopping list application

	constructor() {
		this.shoppingListCollection = new ShoppingListCollection();
		this.rowId = -1;
		this.filter = "none";
		this.sort = "name";
	}

	createShoppingList() {
		let shoppingListName = $("#new-shoppinglist-name").val();
		let shoppingList = new ShoppingList(shoppingListName);
		this.shoppingListCollection.addShoppingList(shoppingList);
		this.printShoppingLists();
	}

	createItem() {
		let itemName = $("#new-item-name").val();
		let itemQuantity = $("#item-add-quantity").val();
		let itemCategory = $("#new-item-category :selected").val();
		try{
			let item = new Item(itemName, itemQuantity, itemCategory);
			this.shoppingListCollection.shoppingLists[this.rowId].addItem(item);
		}catch(err){
			alert(err);
		}
		this.printItemList();
	}

	printShoppingLists(){
		let html = "<tbody>";
		for(let i = 0; i < this.shoppingListCollection.shoppingLists.length; i++){

			html += 
				"<tr id=\""+i+"\">"+
				"<td>"+this.shoppingListCollection.shoppingLists[i].name+"</td>"+
				"<td>"+
				"<input class=\"edit-list\" type=\"image\" src=\"images/edit.png\" style=\"width:20px;height:20px\"></span></input>"+
				"<td>"+
					"<span class=\"input-group-btn\">"+
		                "<button class=\"btn btn-default delete-list\" type=\"button\">"+
		                    "<span class=\"glyphicon glyphicon-trash\"></span>"+
		                "</button>"+
	                "</span>"+
				"</td>"+
				"</tr>";	
		
			html+= "</tbody>";
		}

			document.getElementById("collection-list").innerHTML = html;
	}

	setListName(){
		let name = this.shoppingListCollection.shoppingLists[this.rowId].name;

		document.getElementById("list-name").innerHTML = name;
	}

	printItemList(){
		let filteredItems;
		let sortedItems;

		if(this.rowId!=-1){
			let active = "";
			if (this.filter === "bought"){
				filteredItems = this.shoppingListCollection.shoppingLists[this.rowId].getBoughtItems();
			}
			else {
				if (this.filter === "unbought"){
					filteredItems = this.shoppingListCollection.shoppingLists[this.rowId].getNotBoughtItems();
				}
				else {
					filteredItems = this.shoppingListCollection.shoppingLists[this.rowId].items.slice();
				}
			}

			if (this.sort === "name"){
				sortedItems = this.shoppingListCollection.shoppingLists[this.rowId].getSortAlphabetically(filteredItems);
			}
			else {
				if (this.sort === "category") {
					sortedItems = this.shoppingListCollection.shoppingLists[this.rowId].getSortCategory(filteredItems);
				}
				else {
					sortedItems = filteredItems;
				}
			}

			let html = "<thead>"+
                            "<tr>"+
                                "<th>Namn</th>"+
                                "<th>Antal</th>"+
                                "<th>Kategori</th>"+
                                "<th>Markera Köpt</th>"+
                                "<th>Radera</th>"+
                            "</tr>"+
                        "</thead>";

            html += "<tbody>";
			for(let i = 0; i < sortedItems.length; i++){

				if(sortedItems[i].bought){
					html += "<tr id=\""+sortedItems[i].name+"\" class=\"bought\">";
					active = " active";
				}else{
					html += "<tr id=\""+sortedItems[i].name+"\">";
					active = "";
				}
				html += 
							"<td>"+sortedItems[i].name+"</td>"+
							"<td>"+
								"<div class=\"input-group\">"+
									"<span class=\"input-group-btn\">"+
                                    	"<input class=\"decrease-number btn btn-default\" type=\"button\" value=\"-\">"+
                                    "</span>"+
                                    "<input class=\"form-control\" id=\"item-quantity\" type=\"text\" value=\""+sortedItems[i].quantity+"\" onkeypress='return event.charCode >= 48 && event.charCode <= 57'>"+
                                    "<span class=\"input-group-btn\">"+
                                    	"<input class=\"increase-number btn btn-default\" type=\"button\" value=\"+\">"+
                                    "</span>"+
                                "</div>"+
                            "</td>"+
							"<td>"+sortedItems[i].category+"</td>"+
							"<td>"+
								"<span class=\"input-group-btn\">"+
	                                "<button class=\"btn btn-default bought-icon"+active+"\" type=\"button\">"+
	                                    "<span class=\"glyphicon glyphicon-shopping-cart\"></span>"+
	                                "</button>"+
                            	"</span>"+
							"</td>"+
							"<td>"+
								"<span class=\"input-group-btn\">"+
	                                "<button class=\"btn btn-default delete-item-icon\" type=\"button\">"+
	                                    "<span class=\"glyphicon glyphicon-trash\"></span>"+
	                                "</button>"+
                            	"</span>"+
							"</td>"+
						"</tr>";

			}
			html += "</tbody>";
			document.getElementById("item-list").innerHTML = html;
		}
	}

	deleteList(index){
		let name = this.shoppingListCollection.shoppingLists[index].name;
		this.shoppingListCollection.deleteShoppingList(name);
		this.printShoppingLists();
	}

	editList(index){
		//this.shoppingListCollection[index].name = newName;

		let shoppingListName = $("#edit-shoppinglist-name").val();
		this.shoppingListCollection[index] = newName;
		this.printShoppingLists();
	}

	add(name){
		for(let i = 0; i<this.shoppingListCollection.shoppingLists[this.rowId].items.length; i++){
			if(this.shoppingListCollection.shoppingLists[this.rowId].items[i].name === name){
				this.shoppingListCollection.shoppingLists[this.rowId].items[i].addQuantity();
			}
		}
	}

	sub(name){
		for(let i = 0; i<this.shoppingListCollection.shoppingLists[this.rowId].items.length; i++){
			if(this.shoppingListCollection.shoppingLists[this.rowId].items[i].name === name){
				this.shoppingListCollection.shoppingLists[this.rowId].items[i].subQuantity();
			}
		}
	}

	sortName() {
		this.sort = "name";
		this.printItemList();
	}

	sortCategory() {
		this.sort = "category";
		this.printItemList();
	}

	filterBought() {
		this.filter = "bought";
		this.printItemList();
	}

	filterUnbought() {
		this.filter = "unbought";
		this.printItemList();
	}

	noFilter() {
		this.filter = "none";
		this.printItemList();
	}

	bought(name){
		for(let i = 0; i<this.shoppingListCollection.shoppingLists[this.rowId].items.length; i++){
			if(this.shoppingListCollection.shoppingLists[this.rowId].items[i].name === name){
				this.shoppingListCollection.shoppingLists[this.rowId].items[i].toggleBought();
			}
		}
	}

	deleteItem(name){
		this.shoppingListCollection.shoppingLists[this.rowId].removeItem(name);
		this.printItemList();
	}
}
