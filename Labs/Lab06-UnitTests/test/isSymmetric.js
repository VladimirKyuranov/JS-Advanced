let expect = require("chai").expect;

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) === JSON.stringify(reversed));
    return equal;
}

describe("isSymmetric Tests", function () {
    describe("True Tests", function () {
        it('should return true for [1]', function () {
            let result = isSymmetric([1]);
            expect(result).to.be.equal(true);
        });
        it('should return true for [1, 2, 1]', function () {
            let result = isSymmetric([1, 2, 1]);
            expect(result).to.be.equal(true);
        });
        it('should return true for [1, 2, 1, 1, 2, 1]', function () {
            let result = isSymmetric([1, 2, 1, 1, 2, 1]);
            expect(result).to.be.equal(true);
        });
        it('should return true for [1, "string", {S:"T"}, 1, {S:"T"}, "string", 1]', function () {
            let result = isSymmetric([1, "string", {S:"T"}, 1, {S:"T"}, "string", 1]);
            expect(result).to.be.equal(true);
        });
    });
    describe("False Tests", function () {
        it('should return false for [1, 2]', function () {
            let result = isSymmetric([1, 2]);
            expect(result).to.be.equal(false);
        });
        it('should return false for [1, 2, 3]', function () {
            let result = isSymmetric([1, 2, 3]);
            expect(result).to.be.equal(false);
        });
        it('should return false for [1, "string", {S:"K"}, 1, {S:"T"}, "string", 1]', function () {
            let result = isSymmetric([1, "string", {S:"K"}, 1, {S:"T"}, "string", 1]);
            expect(result).to.be.equal(false);
        });
        it('should return false for "string"', function () {
            let result = isSymmetric("string");
            expect(result).to.be.equal(false);
        });
    });
});