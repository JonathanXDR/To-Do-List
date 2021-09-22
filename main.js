let list = document.getElementById("toDo");

let taskName = document.getElementById("input").value

console.log(taskName)

setInterval(createElement, 100);
function createElement() {
  if (taskName === "") {
    alert("Taskname not specified!");
  } else {
    let element = document.createElement("toDo");
  }
}