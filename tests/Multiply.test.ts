import {CNumber} from "../src/TSNumber";
import {Machine} from "../src/Machine";
import {Multiply} from "../src/Multiply";

let expect = require('chai').expect;

describe('Multiplying expression', function() {
    describe('#reduce', function() {
        it('should returns 0', function() {
            let one = new CNumber(1);
            let zero = new CNumber(0);
            let mul = new Multiply(one, zero);
            let result = mul.reduce({});
            let f = result.getValue() as number;

            expect(f).to.equal(0);
        });

        it('complicated right Multiply', function() {
            let left = new CNumber(44);
            let right = new Multiply(new CNumber(34), new CNumber(10));
            let mul = new Multiply(left, right);
            let m = new Machine(mul, {});
            let n = ((m.eval()).getValue()) as number;

            expect(n).to.equal(14960);
        });

        it('complicated left Addition', function() {
            let right = new CNumber(44);
            let left = new Multiply(new CNumber(34), new CNumber(10));
            let mul = new Multiply(left, right);
            let m = new Machine(mul, {});
            let n = ((m.eval()).getValue()) as number;

            expect(n).to.equal(14960);
        });
    });
});