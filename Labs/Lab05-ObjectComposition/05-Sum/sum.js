function solution() {
    let firstElement;
    let secondElement;
    let resultElement;
    
    function init(selector1, selector2, resultSelector) {
        firstElement = $(selector1);
        secondElement = $(selector2);
        resultElement = $(resultSelector);
    }
    
    function add() {
        let result = Number(firstElement.val()) + Number(secondElement.val());
        resultElement.val(result);
    }
    
    function subtract() {
        let result = Number(firstElement.val()) - Number(secondElement.val());
        resultElement.val(result);
    }
    
    return {init, add, subtract};
}

let obj = solution();
function sum(){
    obj.init("#num1", "#num2", "#result")
    obj.add();
}

function sub(){
    obj.init("#num1", "#num2", "#result")
    obj.subtract();
}