let expect = require("chai").expect;
const HolidayPackage = require("../HolidayPackage");


describe("Holiday Package Tests", function () {
    let holidayPackage;
    beforeEach(function () {
        holidayPackage = new HolidayPackage("Italy", "Summer");
    });
    
    describe("No vacationers tests", function () {
    
        it('should return no vacationers message if vacationer not added', function () {
            expect(holidayPackage.showVacationers()).equal("No vacationers are added yet");
        });
        it('should throw an error', function () {
            expect(holidayPackage.generateHolidayPackage.bind(holidayPackage)).to.throw("There must be at least 1 vacationer added");
        });
        it('should throw an error', function () {
            expect(holidayPackage.addVacationer.bind(holidayPackage, " ")).to.throw("Vacationer name must be a non-empty string");
        });
        it('should throw an error', function () {
            expect(holidayPackage.addVacationer.bind(holidayPackage, 123)).to.throw("Vacationer name must be a non-empty string");
        });
        it('should throw an error', function () {
            expect(holidayPackage.addVacationer.bind(holidayPackage, "123")).to.throw("Name must consist of first name and last name");
        });
        it('should throw an error', function () {
            expect(function () {
                holidayPackage.insuranceIncluded = "true";
            }).to.throw("Insurance status must be a boolean");
        });
    });
    
    describe("Tests with Added Vacationers", function () {
        beforeEach(function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
        });
    
        it('should return valid vacationers list', function () {
            let result = "Vacationers:\n" +
                "Ivan Ivanov\n" +
                "Petar Petrov\n" +
                "Georgi Georgiev";
            expect(holidayPackage.showVacationers()).equal(result);
        });
    
        it('should generate valid holiday package with insurance', function () {
            holidayPackage.insuranceIncluded = true;
            let result = "Holiday Package Generated\n" +
           "Destination: Italy\n" +
           "Vacationers:\n" +
           "Ivan Ivanov\n" +
           "Petar Petrov\n" +
           "Georgi Georgiev\n" +
           "Price: 1500";
            expect(holidayPackage.generateHolidayPackage()).equal(result);
        });
    
        it('should generate valid holiday package without insurance', function () {
            let result = "Holiday Package Generated\n" +
                "Destination: Italy\n" +
                "Vacationers:\n" +
                "Ivan Ivanov\n" +
                "Petar Petrov\n" +
                "Georgi Georgiev\n" +
                "Price: 1400";
            expect(holidayPackage.generateHolidayPackage()).equal(result);
        });
    })
});