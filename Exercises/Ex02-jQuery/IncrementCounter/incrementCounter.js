function increment(element) {
    let textArea = $("<textarea>")
        .addClass("counter")
        .val("0")
        .attr("disabled", "true");
    let incrementBtn = $("<button>")
        .addClass("btn")
        .attr("id", "incrementBtn")
        .text("Increment")
        .on("click", incrementValue);
    
    let addBtn = $("<button>")
        .addClass("btn")
        .attr("id", "addBtn")
        .text("Add")
        .on("click", addToList);
    
    let ul = $("<ul>")
        .addClass("results");
    
    $(`${element}`)
        .append(textArea)
        .append(incrementBtn)
        .append(addBtn)
        .append(ul);
    
    function incrementValue() {
        textArea.val(`${Number(textArea.val()) + 1}`);
    }
    
    function addToList() {
        let li = $("<li>")
            .text(`${textArea.val()}`);
        ul.append(li);
    }
}
