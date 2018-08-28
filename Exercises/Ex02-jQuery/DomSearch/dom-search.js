function domSearch(selector, isCaseSensitive) {
    let mainContainer = $(selector);
    let addControlsDiv = $("<div>")
        .addClass("add-controls")
        .appendTo(mainContainer);
    let addLabel = $("<label>")
        .text("Enter text: ")
        .appendTo(addControlsDiv);
    let addInput = $("<input>")
        .appendTo(addLabel);
    let addButton = $("<a>")
        .text("Add")
        .addClass("button")
        .css("display", "inline-block")
        .on("click", addItem)
        .appendTo(addControlsDiv);
    let searchControlsDiv = $("<div>")
        .addClass("search-controls")
        .appendTo(mainContainer);
    let searchLabel = $("<label>")
        .text("Search: ")
        .appendTo(searchControlsDiv);
    let searchInput = $("<input>")
        .appendTo(searchLabel)
        .on("input", searchItem);
    let resultControlsDiv = $("<div>")
        .addClass("result-controls")
        .appendTo(mainContainer);
    let itemList = $("<ul>")
        .addClass("items-list")
        .appendTo(resultControlsDiv);
    
    function addItem() {
        let li = $("<li>")
            .addClass("list-item")
            .appendTo(itemList);
        $("<a>")
            .addClass("button")
            .text("X")
            .on("click", function () {
                $(this).parent().remove();
            })
            .appendTo(li);
        $("<strong>")
            .text(addInput.val())
            .appendTo(li);
        
        addInput.val("");
    }
    
    function searchItem() {
        let allElements = $("ul li");
        allElements.css("display", "block");
        
        if (isCaseSensitive) {
            allElements.toArray().forEach(li => {
                if(!$(li).text().includes(searchInput.val())){
                    $(li).css("display", "none");
                }else {
                    $(li).css("display", "block");
                }
            })
        } else {
            allElements.toArray().forEach(li => {
                if(!$(li).text().toLowerCase().includes(searchInput.val().toLowerCase())){
                    $(li).css("display", "none");
                }else {
                    $(li).css("display", "block");
                }
            })
        }
        
        if (searchInput.val().length === 0) {
            allElements.css("display", "block");
        }
    }
}
