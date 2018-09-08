function printDeckOfCards(cards) {
    function makeCard(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = {
            S: "\u2660",
            H: "\u2665",
            D: "\u2666",
            C: "\u2663"
        };
        
        if (!faces.includes(face) || !suits.hasOwnProperty(suit)) {
            throw Error("Error");
        }
        
        let card = {
            face,
            suit: suits[suit],
            
            toString: function () {
                return this.face + this.suit
            }
        };
        
        return card.toString();
    }
    
    for (let i = 0; i < cards.length; i++) {
        try {
            let last = cards[i].length - 1;
            let face = cards[i].substring(0, last);
            let suit = cards[i][last];
            let card = makeCard(face, suit);
            cards[i] = card;
        } catch (e) {
            console.log(`Invalid card: ${cards[i]}`);
            return;
        }
    }
    
    console.log(cards.join(" "));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);