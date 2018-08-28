function getArticleGenerator(articles) {
    let content = $("#content");
    let allArticles = articles;
    return () => {
        if(allArticles.length > 0){
            $("<article>")
                .text(allArticles.shift())
                .appendTo(content);
        }
    }
}