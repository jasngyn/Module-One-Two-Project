var todo_listPage = 0;
window.addEventListener('load', function () {
    alert('Welcome to your To-Do List! Here is an interactive form for you to keep track of your day :)');
// Added an alert EventListener when website loads

var todoList = document.getElementById("todoList");
var todoForm = todoList.querySelector("#todoForm");
  todoForm.onsubmit = function(e) {  // Utilize "Enter" key on keyboard
    var todoTask_input = e.target.querySelector("input[name='todoTask']");

    var todoName;
      if (todoTask_input.dataset.edit == "true") {
        var todo_entry_id = todoTask_input.dataset.id;
        todoName = todoList.querySelector(".tasks #itemList" + todo_entry_id + " .todoName");
        // Recieve text content from input element
        todoName.textContent = todoTask_input.value;
        todoTask_input.dataset.edit = false;
        todoTask_input.dataset.id = "";
    }
      else {
            var todoList_value = todoTask_input.value;

// Used document.createElement to create a table (tr and td) after user inputs text and hits enter
// Items are then listed into a table/list
// Used "dataset" to get the value of HTML attributes on elements
var entry = document.createElement("tr");
entry.id = "itemList" + todo_listPage;

var todoCheck = document.createElement("td");
todoCheck.setAttribute("class", "check fa fa-square"); // "Check fa fa-square" - Form Awesome Form Icon
todoCheck.dataset.id = todo_listPage;
todoCheck.dataset.checked = false;
todoCheck.onclick = function(e) {
var todo_entry_id = e.target.dataset.id;
var todoName = todoList.querySelector(".tasks #itemList" + todo_entry_id + " .todoName");
    if (e.target.dataset.checked == "true") {
      e.target.setAttribute("class", "check fa fa-square");
      todoName.style.textDecoration = "";
      e.target.dataset.checked = false;
  }
    else {
          e.target.setAttribute("class", "check fa fa-square");
          // Adds line through text when checkbox is clicked
          todoName.style.textDecoration = "line-through";
          e.target.dataset.checked = true;
        }
};

entry.appendChild(todoCheck);

todoName = document.createElement("td");
todoName.setAttribute("class","todoName");
 // Populates text to the bottom of the list
todoName.textContent = todoList_value;
entry.appendChild(todoName);

var btn_delete = document.createElement("td");

var deleteButton = document.createElement("a");
deleteButton.href = "#";
 // "Delete" button for user to remove task from list
deleteButton.textContent = "Delete";
 // Delete item/task off the list
deleteButton.dataset.id = todo_listPage;
deleteButton.onclick = function(e) {
var todo_entry_id = e.target.dataset.id;
var todo_entry = todoList.querySelector(".tasks #itemList" + todo_entry_id);
var todoName = todoList.querySelector(".tasks #itemList" + todo_entry_id + " .todoName");
var todoTask_input = todoList.querySelector("#todoForm input[name='todoTask']");
todoTask_input.value = todoName.textContent;
todoTask_input.dataset.edit = true;
todoTask_input.dataset.id = todo_entry_id;
todo_entry.parentNode.removeChild(todo_entry);

    return false;
};

btn_delete.appendChild(deleteButton);

entry.appendChild(btn_delete);

var tasks = todoList.querySelector(".tasks");
tasks.appendChild(entry);

todo_listPage++;
}
  return false;
};
});
