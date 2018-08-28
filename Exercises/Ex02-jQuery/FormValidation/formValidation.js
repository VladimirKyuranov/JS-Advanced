function validate() {
    let usernameRegex = /^[a-zA-Z\d]{3,20}$/;
    let passwordRegex = /^[\w]{5,15}$/;
    let emailRegex = /^.*@.*\..*$/;
    let usernameInput = $("#username");
    let emailInput = $("#email");
    let passwordInput = $("#password");
    let confirmPasswordInput = $("#confirm-password");
    let companyChkBox = $("#company")
        .on("change", manageCompanyInput);
    let companyInfo = $("#companyInfo");
    let companyNumberInput = $("#companyNumber");
    let validDiv = $("#valid");
    let isFormValid = true;
    $("#submit")
        .on("click", validateForm);
    
    function manageCompanyInput() {
        if (companyChkBox.is(':checked')) {
            companyInfo.css("display", "block");
        } else {
            companyInfo.css("display", "none");
        }
    }
    
    function validateForm(event) {
        event.preventDefault();
        validateInput(usernameInput, usernameRegex);
        validateInput(emailInput, emailRegex);
        validatePassword();
        
        if (companyChkBox.is(':checked')) {
            validateCompanyNumber();
        }
        
        if (isFormValid) {
            validDiv.css("display", "block");
        } else {
            validDiv.css("display", "none");
        }
    }
    
    function validateInput(input, pattern) {
        if (pattern.test(input.val().toString())) {
            input.css("border", "none");
        } else {
            input.css("border-color", "red");
            isFormValid = false;
        }
    }
    
    function validatePassword() {
        if (passwordInput.val() === confirmPasswordInput.val()) {
            validateInput(passwordInput.val(), passwordRegex)
        }
    }
    
    function validateCompanyNumber() {
        let companyNumber = Number(companyNumberInput.val());
        if (1000 <= companyNumber && companyNumber <= 9999) {
            companyNumberInput.css("border", "none");
        } else {
            companyNumberInput.css("border-color", "red");
            isFormValid = false;
        }
    }
}