let expect = require("chai").expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    
    return "odd";
}

describe("isOddOrEven Tests", function () {
    it('should return undefined with number', function () {
        let result = isOddOrEven(5);
        expect(result).equal(undefined);
    });
    
    it('should return undefined with object', function () {
        let result = isOddOrEven({name: "Name"});
        expect(result).equal(undefined);
    });
    
    it('should return even', function () {
        let result = isOddOrEven("test");
        expect(result).equal("even");
    });
    
    it('should return odd', function () {
        let result = isOddOrEven("tests");
        expect(result).equal("odd");
    });
});