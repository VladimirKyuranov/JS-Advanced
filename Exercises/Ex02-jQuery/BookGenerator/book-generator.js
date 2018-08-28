function createBook(selector, bookTitle, author, isbn) {
    (function () {
        let id = 1;
        return function () {
            console.log("test");
            console.log(selector);
            let mainContainer = $(selector);
            let bookContainer = $("<div>")
                .attr("id", `book${id++}`)
                .appendTo(mainContainer);
            $("<p>")
                .addClass("title")
                .text(bookTitle)
                .appendTo(bookContainer);
            $("<p>")
                .addClass("author")
                .text(author)
                .appendTo(bookContainer);
            $("<p>")
                .addClass("isbn")
                .text(isbn)
                .appendTo(bookContainer);
            $("<button>")
                .text("Select")
                .on("click", selectBook)
                .appendTo(bookContainer);
            $("<button>")
                .text("Deselect")
                .on("click", deselectBook)
                .appendTo(bookContainer);
                
            function selectBook() {
                bookContainer
                    .css("border", "2px solid blue");
            }
            
            function deselectBook() {
                bookContainer
                    .css("border", "");
            }
        }
    }())()
}
