function extractText() {
    let texts = $("#items li").toArray().map(li => $(li).text());
    $("#result").text(texts.join(", "));
}
