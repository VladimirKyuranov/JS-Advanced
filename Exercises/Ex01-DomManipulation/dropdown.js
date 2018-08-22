function addItem() {
    let menu = document.getElementById("menu");
    let itemText = document.getElementById("newItemText");
    let itemValue = document.getElementById("newItemValue");

    let option = document.createElement("option");
    option.text = itemText.value;
    option.value = itemValue.value;
    menu.appendChild(option);

    itemText.value = "";
    itemValue.value = "";
}