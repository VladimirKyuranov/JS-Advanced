function solve(worker) {
    if (worker["handsShaking"] === true){
        worker["bloodAlcoholLevel"] += worker["weight"] * worker["experience"] * 0.1;
        worker["handsShaking"] = false;
    }
    return worker;
}

console.log(solve({ weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false }
));