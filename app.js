
// Lists and items
var list = '<div class="col-sm"><div class="to-do"></div></div>';
var listButton = '<button type="button" class="btn btn-primary">+ Add Item</button>';
var item = '<div class="item"><input type="checkbox"></div>';

// current row we are on
// track so we know where to place the next  to do list
var numRows = 0;

// create a new list
function createList() {

}

// remove a list
function deleteList() {

}

//
function createItem() {

}

// set up initial scaffolding of the page
function init() {
  // Event Listeners

  document.getElementById("create-list").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
  });
}
