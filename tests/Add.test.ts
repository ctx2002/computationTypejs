import {CNumber, CVariable} from "../src/TSNumber";
import { Add } from "../src/Add";
import {Machine} from "../src/Machine";

let expect = require('chai').expect;

describe('Adding TSNumber', function() {
    describe('#reduce', function() {
        it('should returns 1', function() {
             let n = new CNumber(0);
             let n1 = new CNumber(1);
             let a = new Add(n, n1);
             let r = (a.reduce({})).getValue() as number;
             expect(r).to.equal(1);
        });

        it('should return 2', function(){
            let n = new CNumber(1);
            let n1 = new CNumber(1);
            let x = new CVariable('x');
            let y = new CVariable('y');
            let a = new Add(x, y);

            let m = new Machine(a, {'x': n, 'y':n1});
            let f = ((m.eval()).getValue()) as number;
            expect(f).to.equal(2);
        });
    });
});