let expect = require("chai").expect;
let Calculator = require("../Calculator");

describe("Calculator Tests", function () {
    let calculator;
    
    beforeEach(function () {
        calculator = new Calculator();
    });
    
    it('should return empty array with no elements added', function () {
        expect(calculator.toString()).to.equal("empty array");
    });
    it('should return the added elements', function () {
        calculator.add(5);
        calculator.add("Pesho");
        let result = calculator.toString();
        expect(result).to.equal("5 -> Pesho");
    });
    it('should throw an error', function () {
        calculator.add({name: "Pesho"});
        calculator.add("Pesho");
        expect(calculator.divideNums.bind(calculator)).to.throw("There are no numbers in the array!");
    });
    it('should return cannot divide by zero', function () {
        calculator.add(5);
        calculator.add(0);
        expect(calculator.divideNums()).to.equal("Cannot divide by zero");
    });
    it('should return the only number present', function () {
        calculator.add(5);
        calculator.add("Pesho");
        expect(calculator.divideNums()).to.equal(5);
    });
    it('should return 5 for 100, 5, 2, 2', function () {
        calculator.add(100);
        calculator.add("Pesho");
        calculator.add(5);
        calculator.add(2);
        calculator.add(2);
        expect(calculator.divideNums()).to.equal(5);
    });
    it('should return empty with no elements added', function () {
        expect(calculator.orderBy()).to.equal("empty");
    });
    it('should return sorted numbers with only numbers present', function () {
        calculator.add(6);
        calculator.add(9);
        calculator.add(1);
        calculator.add(50);
        calculator.add(-9);
        expect(calculator.orderBy()).to.equal("-9, 1, 6, 9, 50");
    });
    it('should return sorted mixed values', function () {
        calculator.add(6);
        calculator.add(9);
        calculator.add("Pesho");
        calculator.add(1);
        calculator.add(50);
        calculator.add([]);
        calculator.add(-9);
        expect(calculator.orderBy()).to.equal(", -9, 1, 50, 6, 9, Pesho");
    });
});