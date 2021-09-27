let input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("addBtn").click();
  }
});

let newNummber = 0;

let list = document.getElementById("toDo");

function trigger(el) {
  let taskName = document.getElementById("input");
  console.log(taskName);

  if (taskName.value == "") {
    window.alert("Taskname not specified!");
  } else {
    newNummber++;
    let task = document.createElement("li");
    task.className = "task";
    task.id = "task" + newNummber;

    let element = el;
    task.setAttribute("type", "checkbox");
    task.onclick =  moveTask(element);

    task.appendChild(document.createTextNode(taskName.value));
    list.appendChild(task);

    taskName.value = "";
  }
}

let taskStatus = false;

function moveTask(element) {
  if (taskStatus == true) {
    //set this to false
    taskOngoing();
  } else {
    taskDone(element);
    console.log(element)
  }
}

function taskOngoing() {
  taskStatus = false;
}

function taskDone(element) {
  taskStatus = true;
  window.alert("this");
  const el = document.getElementById(element);
  list.removeChild(el);
}
