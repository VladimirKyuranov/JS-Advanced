function solve(input) {
    let carProcessor = (function () {
        let cars = new Map;
        
        function create([name, inherits, parent]) {
            parent = parent ? cars.get(parent) : null;
            let car = Object.create(parent);
            cars.set(name, car);
        }
        
        function set([name, key, value]) {
            cars.get(name)[key] = value;
        }
        
        function print([name]) {
            let car = cars.get([name][0]);
            let properties = [];
            for (let key in car) {
                properties.push(`${key}:${car[key]}`)
            }
            console.log(properties.join(", "));
        }
        
        return {create, set, print}
    })();
    
    for (let inputElement of input) {
        let commandArgs = inputElement.split(/ /);
        let command = commandArgs.shift();
        carProcessor[command](commandArgs);
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);