function solve(input) {
    let sum = input.reduce((a, b) => (a + b));
    let min = input.reduce((a, b) => Math.min(a, b));
    let max = input.reduce((a, b) => Math.max(a, b));
    let product = input.reduce((a, b) => (a * b));
    let join = input.reduce((a, b) => a.toString() + b);
    
    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${join}`);
}

solve([5, -3, 20, 7, 0.5]);
