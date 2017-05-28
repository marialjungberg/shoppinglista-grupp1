class App {
// A class that handles functions and holds information for the
// shopping list application

	constructor() {
		this.shoppingListCollection = new ShoppingListCollection();
		this.rowId = -1;
	}

	createShoppingList() {
		let shoppingListName = $("#new-shoppinglist-name").val();
		let shoppingList = new ShoppingList(shoppingListName);
		this.shoppingListCollection.addShoppingList(shoppingList);
		this.printShoppingLists();
	}

	createItem() {
		let itemName = $("#new-item-name").val();
		let itemQuantity = $("#new-item-quantity").val();
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
							"<td>knapp</td>"+
							"<td>"+
                                "<input class=\"delete-list\" type=\"image\" src=\"images/delete.png\" style=\"width:20px;height:20px\"></span></input>"+
                            "</td>"+
						"</tr>";

		}
		html+= "</tbody>";

		document.getElementById("collection-list").innerHTML = html;
	}

	setListName(){
		let name = this.shoppingListCollection.shoppingLists[this.rowId].name;

		document.getElementById("list-name").innerHTML = name;
	}

	printItemList(){
		if(this.rowId!=-1){
			let shoppingList = this.shoppingListCollection.shoppingLists[this.rowId];
			let html = "<thead>"+
                            "<tr>"+
                                "<th>Namn</th>"+
                                "<th>Antal</th>"+
                                "<th>Kategori</th>"+
                                "<th>knapp</th>"+
                                "<th>knapp2</th>"+
                            "</tr>"+
                        "</thead>";

            html += "<tbody>";
			for(let i = 0; i < shoppingList.items.length; i++){

				html += 
							"<tr id=\""+i+"\">"+
								"<td>"+shoppingList.items[i].name+"</td>"+
								"<td>"+
	                                    "<p>minus</p>"+
	                                    "<p>"+shoppingList.items[i].quantity+"</p>"+
	                                    "<p>plus</p>"+
	                            "</td>"+
								"<td>"+shoppingList.items[i].category+"</td>"+
								"<td>knapp</td>"+
								"<td>knapp2</td>"+
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
}
