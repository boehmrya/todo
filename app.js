
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
  list.innerHTML = '<div class="card to-do"><div class="complete"><i class="fas fa-times"></i></div></div>';
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

// create a warning
function createWarningText() {
  var warningEl = document.createElement("div");
  var warningClass = document.createAttribute("class");
  warningClass.value = "warning";
  warningEl.setAttributeNode(warningClass);
  var warningText = 'Enter text into the field';
  var warningTextNode = document.createTextNode(warningText);  // Create a text node
  warningEl.appendChild(warningTextNode);
  return warningEl;
}


// create the new item element with the text
// from the current input element
function createItem() {
  // get form value and create new to do item element with it
  var textInput = document.getElementById("text-input");
  itemInput = textInput.parentNode;
  var text = textInput.value;

  // erase validation text if it exists
  var warningMessage = document.querySelector('.warning');
  if (warningMessage != null) {
    itemInput.removeChild(warningMessage);
  }

  if (text.length == 0) {
    // create  validation text
    var warningEl = createWarningText();

    // add warning text below the input field
    itemInput.appendChild(warningEl);
  }
  else {
    // create item text wrapper
    var itemWrap = document.createElement("div");
    var itemWrapClass = document.createAttribute("class");
    itemWrapClass.value = "item wrap";
    itemWrap.setAttributeNode(itemWrapClass);

    // create div for item text
    var item = document.createElement("div");
    var itemClass = document.createAttribute("class");
    itemClass.value = "text";
    item.setAttributeNode(itemClass);
    var textNode = document.createTextNode(text);  // Create a text node
    item.appendChild(textNode);

    // create div for close sign
    var complete = document.createElement("div");
    var completeClass = document.createAttribute("class");
    completeClass.value = "complete";
    complete.setAttributeNode(completeClass);
    complete.innerHTML = '<i class="fas fa-times"></i>';

    // put divs together
    itemWrap.appendChild(item);
    itemWrap.appendChild(complete);

    // clear the form input's value
    textInput.value = '';

    // insert new item directly above the input element
    itemInput.insertAdjacentElement("beforebegin", itemWrap);
    numItems += 1;
  }
}

// remove an item
function removeItem(node) {
  var completeItem = node.parentNode;
  //console.log(completeItem);
  completeItem.parentNode.removeChild(completeItem);
}

// set up initial scaffolding of the page
function main() {
  // Event Listeners

  // bind handler for creating and inserting a list
  var createListButton = document.querySelector('#create-list');
  if (createListButton) {
    createListButton.addEventListener('click', insertList);
  }

  // create and insert an item
  var addItem = document.querySelector('#create-item');
  if (addItem) {
    addItem.addEventListener("click", createItem);
  }

  // handle events for dynamically-created elements
  document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.classList[1] === 'fa-times') {
      var parent = event.target.parentNode;
      if (parent.classList[0] === 'complete') {
        removeItem(parent);
      }
    }
  });

  // delete and remove a list




}

// run main program
main();
