function solve(arr, sorter) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = +price;
            this.status = status;
        }
    }
    
    let tickets = [];
    
    arr.forEach(a => {
       [destination, price, status] = a.split('|');
       tickets.push(new Ticket(destination, price, status));
    });
    
    switch (sorter){
        case "destination":
            return tickets.sort((a, b) => a.destination.localeCompare(b.destination));
        case "price":
            return tickets.sort((a, b) => a.price - b.price);
        case "status":
            return tickets.sort((a, b) => a.status.localeCompare(b.status));
    }
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'], "status"));

