/*
* Detta är för att visa hur ni kan göra knappar, först lägger ni class="" i index på objektet som ska tas emot, se exempel igenom att söka på test eller test2 i index
* sen lägger man till en rad i översta satsen: $(".objNamn").click(funNamn); där objNamn är namnet ni bestämde i indexfilen och funNamn är funktionsnamnet som ska anropas
*/

$(function(){
	$(".create-shoppinglist-btn").click(createShoppingList);
	$(".create-item-btn").click(createItem);
	$(".delete-list").click(function(){
		app.deleteList(this.id);
	});
});

$(document).ready(function () {
    $(document).delegate("#collection-list tbody", "click", function (e) {

    	let $tr = $(e.target).closest('tr');
	    rowId = ($tr).attr("id");

    	if(e.target.className==="delete-list"){
    		$(".delete-list").attr('id', rowId);
    		$("#confirm-delete-list").modal();
    	}else{
	        rowClick(rowId);
    	}
    });
});

function rowClick(row){
	app.rowId = rowId;
	app.printItemList();
	app.setListName();
	location.hash = "#list";   
}

function createShoppingList() {
	app.createShoppingList();
}

function createItem() {
	app.createItem();
}


