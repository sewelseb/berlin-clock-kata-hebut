const chai = require('chai');
const Convertor  = require('./convertor');

const should = chai.should();

// "YYYY"
// "0000"
// "Y000"

describe("Berlin clock kata project", function () {
    context("Single minute row method", function() {
        it("given 00:00:00 should return 0000", function() {

            var actural = Convertor.getSingleMinuteRow("00:00:00");

            actural.should.equal("0000");
        });
    });
});