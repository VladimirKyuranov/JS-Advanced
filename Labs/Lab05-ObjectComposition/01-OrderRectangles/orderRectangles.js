function solve(rectangles) {
    for (let i = 0; i < rectangles.length; i++) {
        rectangles[i] = {
            width: Number(rectangles[i][0]),
            height: Number(rectangles[i][1]),
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (rectangle) {
                let areaDiff = rectangle.area() - this.area();
                let widthDiff = rectangle.width - this.width;
                return areaDiff || widthDiff;
            }
        };
    }
    
    rectangles = rectangles.sort((a,b) => a.compareTo(b));
    return rectangles;
}

console.log(solve([[10, 5], [3, 20], [5, 12]]));