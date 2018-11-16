function addSticker() {
    let titleElement = $(".title");
    let textElement = $(".content");
    
    if (titleElement.val() && textElement.val()){
        let ul = $("#sticker-list");
        let li = $("<li class='note-content'>");
        let close = $("<a class='button'>")
            .text("x")
            .on("click", function () {
                li.remove();
            });
        let title = $("<h2>")
            .text(titleElement.val());
        let hr = $("<hr>");
        let p = $("<p>")
            .text(textElement.val());
        
        li.append(close)
            .append(title)
            .append(hr)
            .append(p)
            .appendTo(ul);
        
        titleElement.val("");
        textElement.val("");
    }
}