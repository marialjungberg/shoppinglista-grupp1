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

				if(shoppingList.items[i].bought){
					html += "<tr id=\""+i+"\" class=\"bought\">";
				}else{
					html += "<tr id=\""+i+"\">";
				}
				html += 
							"<td>"+shoppingList.items[i].name+"</td>"+
							"<td>"+
								"<div class=\"input-group\">"+
									"<span class=\"input-group-btn\">"+
                                    	"<input class=\"decrease-number btn btn-default\" type=\"button\" value=\"-\">"+
                                    "</span>"+
                                    "<input class=\"form-control\" id=\"item-quantity\" type=\"text\" value=\""+shoppingList.items[i].quantity+"\" onkeypress='return event.charCode >= 48 && event.charCode <= 57'>"+
                                    "<span class=\"input-group-btn\">"+
                                    	"<input class=\"increase-number btn btn-default\" type=\"button\" value=\"+\">"+
                                    "</span>"+
                                "</div>"+
                            "</td>"+
							"<td>"+shoppingList.items[i].category+"</td>"+
							"<td>"+
								"<input class=\"bought-icon\" type=\"image\" src=\"images/bought.png\" style=\"width:20px;height:20px\"></span></input>"+
							"</td>"+
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

	add(index){
		this.shoppingListCollection.shoppingLists[this.rowId].items[index].addQuantity();
	}

	sub(index){
		this.shoppingListCollection.shoppingLists[this.rowId].items[index].subQuantity();
	}

	bought(index){
		this.shoppingListCollection.shoppingLists[this.rowId].items[index].toggleBought();
	}
}
