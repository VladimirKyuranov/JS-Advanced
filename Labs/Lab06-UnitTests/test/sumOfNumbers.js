let expect = require("chai").expect;

function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

describe("sumOfNumbers tests", function () {
    it("should return 6 for [1, 2, 3]", function () {
        let arr = [1, 2, 3];
        let result = sum(arr);
        expect(result).to.be.equal(6);
    });
    it("should return for []", function () {
        let arr = [];
        let result = sum(arr);
        expect(result).to.be.equal(0);
    });
    it("should return -6 for [-1, -2, -3]", function () {
        let arr = [-1, -2, -3];
        let result = sum(arr);
        expect(result).to.be.equal(-6);
    });
    it("should return NaN for string", function () {
        let arr = "string";
        let result = sum(arr);
        expect(result).to.be.NaN;
    });
    it("should return 6 for [1.5, 2.5, 3.5]", function () {
        let arr = [1.5, 2.5, 3.5];
        let result = sum(arr);
        expect(result).to.be.equal(7.5);
    });
    it("should return Nan for [1, string, 3]", function () {
        let arr = [1, "string", 3];
        let result = sum(arr);
        expect(result).to.be.NaN;
    });
    it("should return 6 for ['1', '2', '3']", function () {
        let arr = ['1', '2', '3'];
        let result = sum(arr);
        expect(result).to.be.equal(6);
    });
});