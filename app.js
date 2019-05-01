
// current row we are on
// track so we know where to place the next  to do list
var currentRow = 1;
var numItems = 0;


// generates the element object for a row
// returns the element object
function createRow() {
  var row = document.createElement("div");
  var rowClass = document.createAttribute("class");
  rowClass.value = "row";
  row.setAttributeNode(rowClass);
  return row;
}

// inserts the row element object into the container
function insertRow() {
  var main = document.getElementById('main');
  var row = createRow();
  main.appendChild(row);
}


// constructs the html for a list
function createList() {
  var list = document.createElement("div");
  var listClass = document.createAttribute("class");       // Create a "class" attribute
  listClass.value = "col-sm";                           // Set the value of the class attribute
  list.setAttributeNode(listClass);
  list.innerHTML = '<div class="card to-do"><div class="complete"><i class="fas fa-check"></i></div></div>';
  return list;
}


// inserts the newly-created list
// tracks which row we are on, adds new rows as needed
function insertList() {
  var rows = document.querySelectorAll(".container .row");
  var list = createList();
  var capacity = rows.length * 3;
  if (numItems > capacity) {
    insertRow();
    currentRow += 1;
  }
  rows[currentRow - 1].appendChild(list);
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

  // bind handler for creating and inserting a list
  var createListButton = document.getElementById("create-list");
  createListButton.addEventListener("click", function(){
    createList();
    insertList();
  });

  // delete and remove a list


  // create and insert an item
  var createItem = document.getElementById('create-item');
  createListButton.addEventListener("click", function(){
    createItem();
  });

}

// run main program
main();
