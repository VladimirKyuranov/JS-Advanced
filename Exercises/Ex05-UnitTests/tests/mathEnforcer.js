let expect = require("chai").expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("mathEnforcer", function () {
    describe("addFive", function () {
        it('should return undefined with not a number parameter', function () {
            expect(mathEnforcer.addFive("13, 0")).to.equal(undefined);
        });
        it('should return parameter + 5 with an Integer parameter', function () {
            expect(mathEnforcer.addFive(13)).to.equal(18);
        });
        it('should return parameter + 5 with a Float parameter', function () {
            expect(mathEnforcer.addFive(13.8)).to.equal(18.8);
        });
        it('should return parameter + 5 with a Negative parameter', function () {
            expect(mathEnforcer.addFive(-13)).to.equal(-8);
        });
        it('should return 5 with a parameter 0', function () {
            expect(mathEnforcer.addFive(0)).to.equal(5);
        });
    });
    
    describe("subtractTen", function () {
        it('should return undefined with not a number parameter', function () {
            expect(mathEnforcer.subtractTen("13, 0")).to.equal(undefined);
        });
        it('should return parameter - 10 with an Integer parameter', function () {
            expect(mathEnforcer.subtractTen(13)).to.equal(3);
        });
        it('should return -10 with parameter 0', function () {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        });
        it('should return 0 with parameter 10', function () {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });
        it('should return parameter -10 with negative parameter', function () {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });
        it('should return parameter -10 with float parameter', function () {
            expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5);
        });
    });
    
    describe("sum", function () {
        it('should return undefined with not a number first parameter', function () {
            expect(mathEnforcer.sum("13", 5)).to.equal(undefined);
        });
        it('should return undefined with not a number second parameter', function () {
            expect(mathEnforcer.sum(13, "5")).to.equal(undefined);
        });
        it('should return the correct sum with both number parameters', function () {
            expect(mathEnforcer.sum(13, 5)).to.equal(18);
        });
        it('should return the correct sum with both number parameters', function () {
            expect(mathEnforcer.sum(0, 5)).to.equal(5);
        });
        it('should return the correct sum with both number parameters', function () {
            expect(mathEnforcer.sum(13, 0)).to.equal(13);
        });
        it('should return the correct sum with both number parameters', function () {
            expect(mathEnforcer.sum(13, 2.6)).to.equal(15.6);
        });
        it('should return the correct sum with both number parameters', function () {
            expect(mathEnforcer.sum(-13, 2.6)).to.equal(-10.4);
        });
        it('should return 0 with both 0 parameters', function () {
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
        });
        it('should return the correct sum with both negative parameters', function () {
            expect(mathEnforcer.sum(-13, -15)).to.equal(-28);
        });
        it('should return the correct sum with both float parameters', function () {
            expect(mathEnforcer.sum(2.5, 3.5)).to.equal(6);
        });
    });
});
