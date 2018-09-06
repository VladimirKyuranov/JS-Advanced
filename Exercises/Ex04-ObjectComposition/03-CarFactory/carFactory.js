function createCar(car) {
    let model = car["model"];
    let power = car["power"];
    let color = car["color"];
    let carriage = car["carriage"];
    let wheelsize = car["wheelsize"];
    let volume;
    
    if (power <= 90) {
        power = 90;
        volume = 1800;
    } else if (power <= 120) {
        power = 120;
        volume = 2400;
    } else {
        power = 200;
        volume = 3500;
    }
    
    if (wheelsize % 2 === 0) {
        wheelsize--;
    }
    
    car = {
        model,
        engine: {
            power,
            volume
        },
        carriage: {
            type : carriage,
            color
        },
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    };
    
    return car;
}

console.log(createCar({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
));