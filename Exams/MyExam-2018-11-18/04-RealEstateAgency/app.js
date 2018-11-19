function realEstateAgency() {
    let agencyProfit = 0;
    let roof = $("#roof");
    let building = $("#building");
    let messageField = $("#message");
    
    let rentElement = $("[name='apartmentRent']");
    let appartmentElement = $("[name='apartmentType']");
    let commisionElement = $("[name='agencyCommission']");
    let regButton = $("[name='regOffer']")
        .on("click", registerOffer);
    
    let budgetElement = $("[name='familyBudget']");
    let familyApartmentElement = $("[name='familyApartmentType']");
    let familyNameElement = $("[name='familyName']");
    let findButton = $("[name='findOffer']")
        .on("click", findOffer);
    
    function registerOffer() {
        if (!Number.isInteger(+rentElement.val()) || +rentElement.val() <= 0 ||
            !Number.isInteger(+commisionElement.val()) || +commisionElement.val() < 0 || +commisionElement.val() > 100 ||
            !appartmentElement.val() || appartmentElement.val().indexOf(":") > -1) {
            messageField.text("Your offer registration went wrong, try again.");
            
            rentElement.val("");
            appartmentElement.val("");
            commisionElement.val("");
            return;
        }
        
        let div = $("<div class='apartment'>");
        let rentParagraph = $("<p>")
            .text(`Rent: ${rentElement.val()}`);
        let typeParagraph = $("<p>")
            .text(`Type: ${appartmentElement.val()}`);
        let commissionParagraph = $("<p>")
            .text(`Commission: ${commisionElement.val()}`);
        
        div.append(rentParagraph)
            .append(typeParagraph)
            .append(commissionParagraph)
            .appendTo(building);
        
        rentElement.val("");
        appartmentElement.val("");
        commisionElement.val("");
        messageField.text("Your offer was created successfully.");
    }
    
    function findOffer() {
        if (!Number.isInteger(+budgetElement.val()) || +budgetElement.val() <= 0 ||
            !familyApartmentElement.val() || !familyNameElement.val()) {
            budgetElement.val("");
            familyApartmentElement.val("");
            familyNameElement.val("");
            return;
        }
        
        let offers = [...$("#building div")];
        
        offers.forEach(o => {
            let rent = +$(o.childNodes[0]).text().slice(5);
            let type = $(o.childNodes[1]).text().slice(6);
            let commission = +$(o.childNodes[2]).text().slice(11);
            
            let totalPrice = rent + rent * commission / 100;
            
            if (totalPrice <= +budgetElement.val() && type === familyApartmentElement.val()) {
                $(o).empty();
                $(o).attr("style", "border: 2px solid red;")
                
                let name = $("<p>")
                    .text(familyNameElement.val());
                let liveHere = $("<p>")
                    .text("live here now");
                let moveOutButton = $("<button>")
                    .text("MoveOut")
                    .on("click", function () {
                        $(o).remove();
                        let family = $(o.childNodes[0]).text();
                        messageField.text(`They had found cockroaches in ${family}'s apartment`)
                    });
                
                $(o)
                    .append(name)
                    .append(liveHere)
                    .append(moveOutButton);
                messageField.text("Enjoy your new home! :))");
                agencyProfit += rent * commission / 50;
                let profitElement = $("<h1>")
                    .text(`Agency profit: ${agencyProfit} lv.`);
                roof.empty()
                    .append(profitElement);
            }
            else {
                messageField.text("We were unable to find you a home, so sorry :(")
            }
    
            budgetElement.val("");
            familyApartmentElement.val("");
            familyNameElement.val("");
        });
    }
}