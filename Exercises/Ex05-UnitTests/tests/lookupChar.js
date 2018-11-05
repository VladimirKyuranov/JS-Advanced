let expect = require("chai").expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    
    return string.charAt(index);
}

describe("lookupChar", function () {
    it('should return undefined with not a string input', function () {
        expect(lookupChar(13, 0)).to.equal(undefined);
    });
    it('should return undefined with not an integer index', function () {
        expect(lookupChar("test string", "0")).to.equal(undefined);
    });
    it('should return undefined with not an floating index', function () {
        expect(lookupChar("test string", 1.2)).to.equal(undefined);
    });
    it('should return Incorrect index with negative index', function () {
        expect(lookupChar("test string", -2)).to.equal("Incorrect index");
    });
    it('should return Incorrect index with index equal the string length', function () {
        expect(lookupChar("test string", 11)).to.equal("Incorrect index");
    });
    it('should return Incorrect index with index bigger than the string length', function () {
        expect(lookupChar("test string", 12)).to.equal("Incorrect index");
    });
    it('should return correct char with valid parameters', function () {
        expect(lookupChar("test string", 0)).to.equal('t');
    });
    it('should return correct char with valid parameters', function () {
        expect(lookupChar("test string", 5)).to.equal('s');
    });
});
