class Rat {
    constructor(name) {
        this.name = name;
        this.rats = [];
    }
    
    unite(rat) {
        
        if (rat instanceof Rat) {
            this.rats.push(rat);
        }
    }
    
    getRats() {
        return this.rats;
    }
    
    toString() {
        let result = this.name;
        
        this.rats.forEach(r => {
            result += `\n##${r.name}`;
        });
        
        return result;
    }
}

let test = new Rat("Pesho");
console.log(test.toString());

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());

console.log(test.toString());
