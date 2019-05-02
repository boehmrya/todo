
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

// create the new item element with the text
// from the current input element
function createItem() {
  // get form value and create new to do item element with it
  var textInput = document.getElementById("text-input");
  var text = textInput.value;
  var item = document.createElement("div");
  var textNode = document.createTextNode(text);  // Create a text node
  item.appendChild(textNode);

  // clear the form input's value
  textInput.value = '';

  // add the class attribute to the newly created element
  var itemClass = document.createAttribute("class");
  itemClass.value = "item text";
  item.setAttributeNode(itemClass);
  return item;
}

// handle inserting the newly created to do list item
// into the list above the input field.
function insertItem() {

}

// remove an item
function deleteItem() {

}

// set up initial scaffolding of the page
function main() {
  // Event Listeners

  // bind handler for creating and inserting a list
  var createListButton = document.getElementById("create-list");
  createListButton.addEventListener("click", insertList);

  // delete and remove a list


  // create and insert an item
  var createItem = document.getElementById('create-item');
  createListButton.addEventListener("click", function(){
    createItem();
  });

}

// run main program
main();
