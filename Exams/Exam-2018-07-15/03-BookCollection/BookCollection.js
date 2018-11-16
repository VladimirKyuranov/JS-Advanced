class BookCollection {
    get room() {
        return this._room;
    }
    
    set room(value) {
        let validRooms = ["livingRoom", "bedRoom", "closet"];
        
        if (validRooms.includes(value)) {
            this._room = value;
        }
        else {
            throw Error(`Cannot have book shelf in ${value}`);
        }
    }
    
    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }
    
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = room;
        this.shelfCapacity = shelfCapacity;
        this.shelfGenre = shelfGenre;
        this.shelf = [];
    }
    
    addBook(bookName, bookAuthor, genre) {
        if (this.shelfCondition === 0) {
            this.shelf.shift();
        }
        
        let book = {
            bookName,
            bookAuthor,
            genre
        };
        
        this.shelf.push(book);
        this.shelf = this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
        return this;
    }
    
    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter(b => b.bookName !== bookName);
    }
    
    showBooks(genre) {
        let result = `Results for search "${genre}":\n`;
        
        result += this.shelf
            .filter(b => b.genre === genre)
            .map(b => `\uD83D\uDCD6 ${b.bookAuthor} - "${b.bookName}"`)
            .join("\n");
        
        return result;
    }
    
    toString() {
        let result = "";
        
        if (this.shelf.length === 0) {
            result = "It's an empty shelf";
        }
        else {
            result = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
            result += this.shelf
                .map(b => `\uD83D\uDCD6 "${b.bookName}" - ${b.bookAuthor}`)
                .join("\n");
        }
        
        return result;
    }
}

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.toString());
