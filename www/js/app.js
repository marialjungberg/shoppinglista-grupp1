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

	printShoppingLists(){
		let html = "";
		for(let i = 0; i < this.shoppingListCollection.shoppingLists.length; i++){

			html += "<tbody>"+
						"<tr id=\""+i+"\">"+
							"<td>"+this.shoppingListCollection.shoppingLists[i].name+"</td>"+
							"<td>knapp</td>"+
							"<td>knapp2</td>"+
						"</tr>"+
					"</tbody>";

		}
		document.getElementById("collection-list").innerHTML = html;
	}

	setListName(){
		let name = this.shoppingListCollection.shoppingLists[this.rowId].name;

		document.getElementById("list-name").innerHTML = name;
	}

	printItemList(){
		if(this.rowId!=-1){
			let shoppingList = this.shoppingListCollection.shoppingLists[this.rowId];
			let html = "";
			for(let i = 0; i < shoppingList.items.length; i++){

				html += "<tbody>"+
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
							"</tr>"+
						"</tbody>";

			}
			document.getElementById("item-list").innerHTML = html;
		}
		


		/*<tbody>
                            <tr>
                                <td>Sallad</td>
                                <td>
                                    <p>minus</p>
                                    <p>2</p>
                                    <p>plus</p>
                                </td>
                                <td>frukt</td>
                                <td>knapp</td>
                                <td>knaop</td>
                            </tr>
                        </tbody>
		*/
	}
}
