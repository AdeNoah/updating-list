let input = document.getElementById('item-input');
let addButton = document.getElementById('add-item-button');
let list = document.getElementById('item-list');

let inputValue = input.value.trim();

addButton.addEventListener('click', addItem);

function addItem(e) {
    if(inputValue !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = inputValue;

        list.appendChild('listItem');

        input.value = "";
    }
}