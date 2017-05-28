/*
* Detta är för att visa hur ni kan göra knappar, först lägger ni class="" i index på objektet som ska tas emot, se exempel igenom att söka på test eller test2 i index
* sen lägger man till en rad i översta satsen: $(".objNamn").click(funNamn); där objNamn är namnet ni bestämde i indexfilen och funNamn är funktionsnamnet som ska anropas
*/

$(function(){
	$(".test").click(test);
	$(".test2").click(test2);
	$(".create-shoppinglist-btn").click(createShoppingList);
});

function test() {
	console.log("Detta är ett test!");
}


function test2() {
	console.log("Detta är också test!");
}

function createShoppingList() {
	app.createShoppingList();
}

