function result() {
    return {
        list: [],
        size: 0,
        
        add: function (element) {
            this.list.push(element);
            this.list.sort((a, b) => a - b);
            this.size++;
        },
        
        remove: function (index) {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1);
                this.size--;
            }
        },
        
        get: function (index) {
            if (index >= 0 && index < this.list.length) {
                return this.list[index];
            }
        },
    }
}

let myList = result();
let expectedArray = [];
for (let i = 0; i < 20; i++) {
    expectedArray.push(Math.floor(Math.random() * 200) - 100);
}

expectedArray.sort((a, b) => a - b);
console.log(expectedArray);

for (let i = 0; i < expectedArray.length; i++) {
    myList.add(expectedArray[i]);
}


console.log(myList.list);