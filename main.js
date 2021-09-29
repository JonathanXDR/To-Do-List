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

function trigger(element) {
  let taskName = document.getElementById("input");
  console.log(taskName);

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
    task.setAttribute("onclick", "moveTask()"); //'reply_click( " ' + this.id + ' " )');
    task.appendChild(document.createTextNode(taskName.value));
    list.appendChild(task);

    //Delete taskname from input, after Button was pressed
    taskName.value = "";
  }
}

function reply_click(clicked_id) {
  alert($(this).attr("id"));
}

let taskStatus = false;

function moveTask() {
  //element
  if (taskStatus == true) {
    //set this to false
    taskOngoing();
  } else {
    taskDone(); //element
    console.log(); //element
  }
}

function taskOngoing() {
  taskStatus = false;
}

function taskDone() {
  //element
  taskStatus = true;
  list.removeChild(firstChild);

  // Get the last <li> element ("Milk") of <ul> with id="myList2"
  var itm = document.getElementById("toDo").firstChild;

  // Copy the <li> element and its child nodes
  var cln = itm.cloneNode(true);

  // Append the cloned <li> element to <ul> with id="myList1"
  document.getElementById("done").appendChild(cln);
}
