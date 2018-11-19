class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }
    
    get numberOfChildren() {
        let count = 0;
        
        let grades = Object.keys(this.kids);
        grades.forEach(g => count += this.kids[g].length);
        
        return count;
    }
    
    registerChild(name, grade, budget) {
        let starter = name + "-";
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }
        let kid = `${name}-${budget}`;
        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }
        if (this.kids[grade].includes(kid)) {
            return `${name} is already in the list for this ${this.destination} vacation.`
        }
        
        this.kids[grade].push(kid);
        return this.kids[grade];
    }
    
    removeChild(name, grade) {
        let starter = name + "-";
        if (this.kids.hasOwnProperty(grade) && this.kids[grade].some(kid => kid.startsWith(starter))) {
            this.kids[grade] = this.kids[grade].filter(kid => !kid.startsWith(starter));
            return this.kids[grade];
        }
        
        return `We couldn't find ${name} in ${grade} grade.`;
    }
    
    toString() {
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
        } else {
            let grades = [...Object.keys(this.kids)].sort((a, b) => +a - +b);
            let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
            
            grades.filter(g => this.kids[g].length !== 0).forEach(g => {
                let count = 1;
                result += `Grade: ${g}\n`;
                
                this.kids[g].forEach(k => result += `${count++}. ${k}\n`);
            });
            
            return result;
        }
    }
}

let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
console.log(vacation.toString());
