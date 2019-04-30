
// Lists and items
var list = '<div class="col-sm"><div class="to-do"></div></div>';
var listButton = '<button type="button" class="btn btn-primary">+ Add Item</button>';
var item = '<div class="item"><input type="checkbox"></div>';

// current row we are on
// track so we know where to place the next  to do list
var numRows = 0;

// constructs the html for a list
function createList() {
  var list = document.createElement("div");
  var listClass = document.createAttribute("class");       // Create a "class" attribute
  listClass.value = "col-sm";                           // Set the value of the class attribute
  list.setAttributeNode(listClass);
  list.innerHTML = '<div class="to-do"><div class="complete"><i class="fas fa-check"></i></div></div>';
}

// inserts the newly-created list
// tracks which row we are on, adds new rows as needed
function insertList() {
  var rows = document.querySelectorAll(".container .row");
  console.log(rows);
}

// remove a list
function deleteList() {

}

//
function createItem() {

}

// set up initial scaffolding of the page
function main() {
  // Event Listeners

  // create and insert a list
  var createButton = document.getElementById("create-list");
  createButton.addEventListener("click", function(){
    createList();
    insertList();
  });

  // delete and remove a list


  // create and insert an item


  //
}

// run main program
main();
