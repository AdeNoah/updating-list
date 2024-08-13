const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function addItem() {
    if (itemInput.value === '') {
        alert("Please add a task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = itemInput.value;
        itemList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    itemInput.value = "";
    saveData();
}

itemList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", itemList.innerHTML);
}

function loadData() {
    itemList.innerHTML = localStorage.getItem("data");
}

document.getElementById("add-item-form").addEventListener("submit", function(e) {
    e.preventDefault();
    addItem();
});

loadData();
