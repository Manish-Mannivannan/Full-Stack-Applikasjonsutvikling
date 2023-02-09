document.getElementById("up").addEventListener("click", stepUp);
function stepUp() {
  let newNumber = parseInt(document.getElementById("UDNumber").innerHTML) + 1;
  if (newNumber == 99) {
    alert("Cant go higer");
  } else {
    document.getElementById("UDNumber").innerHTML = newNumber;
  }
}

document.getElementById("down").addEventListener("click", stepDown);
function stepDown() {
  let newNumber = parseInt(document.getElementById("UDNumber").innerHTML) - 1;
  if (newNumber == -99) {
    alert("Cant go lower");
  } else {
    document.getElementById("UDNumber").innerHTML = newNumber;
  }
}

document.getElementById("visibilityButton").addEventListener("click", changeVisibility);
function changeVisibility() {
  let status = document.getElementById("visibilityButton");
  let hidingText = document.getElementById("hidingText");
  if (status.innerText == "Hide") {
    hidingText.style.opacity = "0";
    status.innerText = "Show";
  } else if (status.innerText == "Show") {
    hidingText.style.opacity = "1";
    status.innerText = "Hide";
  }
}

let list = document.getElementById("list");
textArray = ["Apple", "Orange", "Mango", "Grapes", "Banana", "Grapefruit", "Pear",
 "Berries", "Melon", "Citrus", "Tomatos"];
document.getElementById("addTextButton").addEventListener("click", pushArray);
function pushArray() {
  list.innerHTML = "";
  let newText = document.getElementById("addText");
  if (newText.value != "") { //&& !textArray.includes(newText.value) add if wanted
    textArray.push(newText.value);
  }
  refreshList();
}

function refreshList() {
  textArray.forEach((element) => {
    let listElement = document.createElement("li");
    listElement.innerHTML = element;
    list.appendChild(listElement);
  });
}

window.onload = refreshList();