let manager = (function () {
    let protein = 0;
    let carbohydrate = 0;
    let fat = 0;
    let flavour = 0;
    
    function report() {
        return `protein=${protein} carbohydrate=${carbohydrate} fat=${fat} flavour=${flavour}`
    }
    
    function restock(ingredient, quantity) {
        switch (ingredient) {
            case "protein":
                protein += quantity;
                break;
            case "carbohydrate":
                carbohydrate += quantity;
                break;
            case "fat":
                fat += quantity;
                break;
            case "flavour":
                flavour += quantity;
                break;
        }
        return "Success";
    }
    
    function prepare(meal, quantity) {
        switch (meal) {
            case "apple":
                if (carbohydrate < quantity) return error("carbohydrate");
                if (flavour < 2 * quantity) return error("flavour");
                carbohydrate -= quantity;
                flavour -= 2 * quantity;
                return "Success";
            case "coke":
                if (carbohydrate < 10 * quantity) return error("carbohydrate");
                if (flavour < 20 * quantity) return error("flavour");
                carbohydrate -= 10 * quantity;
                flavour -= 20 * quantity;
                return "Success";
            case "burger":
                if (carbohydrate < 5 * quantity) return error("carbohydrate");
                if (fat < 7 * quantity) return error("fat");
                if (flavour < 3 * quantity) return error("flavour");
                carbohydrate -= 5 * quantity;
                fat -= 7 * quantity;
                flavour -= 3 * quantity;
                return "Success";
            case "omelet":
                if (protein < 5 * quantity) return error("protein");
                if (fat < quantity) return error("fat");
                if (flavour < quantity) return error("flavour");
                protein -= 5 * quantity;
                fat -= quantity;
                flavour -= quantity;
                return "Success";
            case "cheverme":
                if (protein < 10 * quantity) return error("protein");
                if (carbohydrate < 10 * quantity) return error("carbohydrate");
                if (fat < 10 * quantity) return error("fat");
                if (flavour < 10 * quantity) return error("flavour");
                protein -= 10 * quantity;
                carbohydrate -= 10 * quantity;
                fat -= 10 * quantity;
                flavour -= 10 * quantity;
                return "Success";
        }
    }
    
    function error(ingredient) {
        return `Error: not enough ${ingredient} in stock`
    }
    
    return function (input) {
        if (input === "report") {
            return report();
        }
        
        let [command, item, quantity] = input.split(/ +/g);
        
        if (command === "restock") {
            return restock(item, Number(quantity));
        } else {
            return prepare(item, Number(quantity));
        }
    }
}());

console.log(manager("prepare cheverme 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("report"));

