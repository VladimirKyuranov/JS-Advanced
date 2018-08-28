function argumentInfo() {
    let typeCount = new Map;
    
    for (const argument of arguments) {
        let type = typeof argument;
        console.log(`${type}: ${argument}`);
        
        if (typeCount.has(type) === false) {
            typeCount.set(type, 0);
        }
        
        typeCount.set(type, typeCount.get(type) + 1);
    }
    
    let orderedKeys = Array.from(typeCount.keys()).sort((a, b) => typeCount.get(b) - typeCount.get(a));
    for (const key of orderedKeys) {
        console.log(`${key} = ${typeCount.get(key)}`);
    }
}

argumentInfo('cat',
    {"name" : "Eric"}, 5,  42, function () { console.log('Hello world!'); });