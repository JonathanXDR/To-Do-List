//Click button with enter-key
let input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("addBtn").click();
  }
});

let newNummber = 0;

let list = document.getElementById("toDo");

function trigger() {
  let taskName = document.getElementById("input");
  if (taskName.value == "") {
    window.alert("Taskname not specified!");
  } else {
    //Get random number
    newNummber++;
    let task = document.createElement("li");

    //Style task
    task.className = "task";
    task.id = "task" + newNummber;

    task.setAttribute("type", "checkbox");
    task.setAttribute("onclick", "taskDone(this)");
    // task.innerHTML = taskName.value;
    task.appendChild(document.createTextNode(taskName.value));
    list.appendChild(task);

    //Delete taskname from input, after Button was pressed
    taskName.value = "";
  }
}

function taskDone(child) {
  //element
  
  list.removeChild(child);

  // Copy the <li> element and its child nodes
  var cln = child.cloneNode(true);

  // Append the cloned <li> element to <ul> with id="myList1"
  document.getElementById("done").appendChild(cln);
}
