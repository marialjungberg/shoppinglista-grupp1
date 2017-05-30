$(function(){
	
	$(".create-shoppinglist-btn").click(createShoppingList);
	$(".create-item-btn").click(createItem);

	// create list and items on ENTER
	$('#new-shoppinglist-name').keyup(function(e){
		if(e.which === 13){
			createShoppingList();
		}
	});

	$('#new-item-name').keyup(function(e){
		if(e.which === 13){
			createItem();
		}
	});

	$(".delete-list-modal").click(function(){
		app.deleteList(this.id);
	});
	$(".delete-item").click(function(){
		app.deleteItem(this.id);
	});
	$(".edit-list-modal").click(function(){
		app.editList(this.id);
	});
	/*$(".confirm-edit-list").click(function(){
		app.editList(this.id);
	});*/
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
	    name = ($tr).attr("id");

    	if(e.target.className==="increase-number btn btn-default"){
    		app.add(name);
			app.printItemList();
    	}else if(e.target.className==="decrease-number btn btn-default"){
    		app.sub(name);
			app.printItemList();
    	}else if(e.target.className==="btn btn-default bought-icon" || e.target.className==="btn btn-default bought-icon active" || e.target.className==="glyphicon glyphicon-shopping-cart"){
    		app.bought(name);
    		app.printItemList();
    	}else if(e.target.className==="btn btn-default delete-item-icon" || e.target.className==="glyphicon glyphicon-trash"){
    		$(".delete-item-modal").attr('id', name);
    		$("#confirm-delete-item").modal();
    	}
    });
});

$(document).ready(function () {
    $(document).delegate("#collection-list tbody", "click", function (e) {

    	let $tr = $(e.target).closest('tr');
	    rowId = ($tr).attr("id");

    	if(e.target.className==="glyphicon glyphicon-trash" || e.target.className==="btn btn-default delete-list"){
    		$(".delete-list-modal").attr('id', rowId);
    		$("#confirm-delete-list").modal();
    	}else if(e.target.className==="glyphicon glyphicon-pencil" || e.target.className==="btn btn-default edit-list"){
    		$(".edit-list-modal").attr('id', rowId);
    		$("#edit-list-name").modal();
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
	$('#new-shoppinglist-name').val('');
	window.scrollTo(0,1000000000);
}

function createItem() {
	app.createItem();
	$('#new-item-name').val('');
	window.scrollTo(0,1000000000);
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


