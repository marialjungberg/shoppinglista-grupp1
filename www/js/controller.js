$(function(){
	$(".create-shoppinglist-btn").click(createShoppingList);
	$(".create-item-btn").click(createItem);
	$(".delete-list").click(function(){
		app.deleteList(this.id);
	});
	$(".increase-add-number").click(function(e){
		let previous = $("#item-add-quantity").val();
		previous++;
		$("#item-add-quantity").val(previous);
	});
	$(".decrease-add-number").click(function(e){
		let previous = $("#item-add-quantity").val();
		if(previous>0){
			previous--;
		}
		$("#item-add-quantity").val(previous);
	});
	$(".sort-name-btn").click(sortName);
	$(".sort-category-btn").click(sortCategory);
	$(".filter-bought-btn").click(filterBought);
	$(".filter-unbought-btn").click(filterUnbought);
	$(".no-filter-btn").click(noFilter);
});

$(document).ready(function () {
    $(document).delegate("#item-list tbody", "click", function (e) {

    	let $tr = $(e.target).closest('tr');
	    rowId = ($tr).attr("id");

    	if(e.target.className==="increase-number btn btn-default"){
    		app.add(rowId);
			app.printItemList();
    	}else if(e.target.className==="decrease-number btn btn-default"){
    		app.sub(rowId);
			app.printItemList();
    	}else if(e.target.className==="bought-icon"){
    		app.bought(rowId);
    		app.printItemList();
    	}
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

function sortName() {
	app.sortName();
}

function sortCategory() {
	app.sortCategory();
}

function filterBought() {
	app.filterBought();
}

function filterUnbought() {
	app.filterUnbought();
}

function noFilter() {
	app.noFilter();
}


