const chai = require('chai');
const Convertor  = require('./convertor');

const should = chai.should();

// "YYYY"
// "0000"
// "Y000"

describe("Berlin clock kata project", function () {
    context("Single minute row method", function() {
        it("given 00:00:00 should return 0000", function() {
            var actual = Convertor.getSingleMinuteRow("00:00:00");

            actual.should.equal("0000");
        });
        it("given 00:01:00 should return Y000", function() {
            actual = Convertor.getSingleMinuteRow("00:01:00");

            actual.should.equal("Y000");
        });
        it("given 00:02:00 should return YY00", function() {
            actual = Convertor.getSingleMinuteRow("00:02:00");

            actual.should.equal("YY00");
        });
        it("given 00:03:00 should return YYY0", function() {
            actual = Convertor.getSingleMinuteRow("00:03:00");

            actual.should.equal("YYY0");
        });
        it("given 00:04:00 should return YYYY", function() {
            actual = Convertor.getSingleMinuteRow("00:04:00");

            actual.should.equal("YYYY");
        });
        it("given 00:05:00 should return 0000", function() {
            actual = Convertor.getSingleMinuteRow("00:05:00");

            actual.should.equal("0000");
        });
        it("given 00:06:00 should return Y000", function() {
            actual = Convertor.getSingleMinuteRow("00:06:00");

            actual.should.equal("Y000");
        });
    });
    context("five minutes row function", function() {
        it("given 00:00:00 should return 00000000000", function() {
            var actual = Convertor.getFiveMinuteRow("00:00:00");

            actual.should.equal("00000000000");
        });
        it("given 00:01:00 should return 00000000000", function() {
            var actual = Convertor.getFiveMinuteRow("00:01:00");

            actual.should.equal("00000000000");
        });
        it("given 00:05:00 should return Y0000000000", function() {
            var actual = Convertor.getFiveMinuteRow("00:05:00");

            actual.should.equal("Y0000000000");
        });
        it("given 00:10:00 should return YY000000000", function() {
            var actual = Convertor.getFiveMinuteRow("00:10:00");

            actual.should.equal("YY000000000");
        });
        it("given 00:15:00 should return YYR00000000", function() {
            var actual = Convertor.getFiveMinuteRow("00:15:00");

            actual.should.equal("YYR00000000");
        });
    });
});