let items = [];

const itemsDiv = document.getElementById("items")

function loadItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {
        const text = document.createElement("p")
        text.textContent = item;

        itemsDiv.appendChild(text)
    }
}

function renderItems() {

}

function saveItems() {

}

function addItem() {

}

function removeItem() {

}