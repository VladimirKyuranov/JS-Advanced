function acceptance() {
	let companyElement = $("[name='shippingCompany']");
	let productElement = $("[name='productName']");
	let quantityElement = $("[name='productQuantity']");
	let scrapeElement = $("[name='productScrape']");
	let acceptanceButton = $("#acceptance");
	let warehouseElement = $("#warehouse");
	
	if (!companyElement.val() || !productElement.val() || !Number.isFinite(+quantityElement.val()) || !Number.isFinite(+scrapeElement.val())){
        return;
    }
    
    let availableQuantity = +quantityElement.val() - +scrapeElement.val();
	
	if (availableQuantity <= 0){
	    return;
    }
    
    let div = $("<div>");
    let p = $("<p>")
        .text(`[${companyElement.val()}] ${productElement.val()} - ${availableQuantity} pieces`);
    let deleteButton = $("<button type='button'>")
        .text("Out of stock")
        .on("click", function () {
            div.remove();
        });
    
    div.append(p)
        .append(deleteButton)
        .appendTo(warehouseElement);
    
    companyElement.val("");
    productElement.val("");
    quantityElement.val("");
    scrapeElement.val("");
}