import {CNumber, CVariable, CString} from "../src/TSNumber";
import { Add } from "../src/Add";
import {Machine} from "../src/Machine";
import {LessThan} from "../src/LessThan";
import {Multiply} from "../src/Multiply";

let expect = require('chai').expect;

describe('Less than', function() {
    describe('#reduce', function() {
        it('should returns true, compare 2 different numbers', function() {
            let n = new CNumber(0);
            let n1 = new CNumber(1);
            let l = new LessThan(n, n1);
            let r = (l.reduce({}).getValue()) as boolean;
            expect(r).to.equal(true);
        });

        it('should returns false, compare 2 different numbers', function() {
            let n = new CNumber(1);
            let n1 = new CNumber(0);
            let l = new LessThan(n, n1);
            let r = (l.reduce({}).getValue()) as boolean;
            expect(r).to.equal(false);
        });

        it('should returns false, compare 2 same numbers', function() {
            let n = new CNumber(1);
            let n1 = new CNumber(1);
            let l = new LessThan(n, n1);
            let r = (l.reduce({}).getValue()) as boolean;
            expect(r).to.equal(false);
        });

        it('should returns false, compare 2 different strings', function() {
            let n = new CString("abcde");
            let n1 = new CString("abcd");
            let l = new LessThan(n, n1);
            let r = (l.reduce({}).getValue()) as boolean;
            expect(r).to.equal(false);
        });

        it('should returns true, compare 2 different strings', function() {
            let n = new CString("abcde");
            let n1 = new CString("abcdef");
            let l = new LessThan(n, n1);
            let r = (l.reduce({}).getValue()) as boolean;
            expect(r).to.equal(true);
        });

        it('should returns false, use variables', function() {
            let n = new CNumber(1);
            let n1 = new CNumber(0);
            let x = new CVariable('x');
            let y = new CVariable('y');
            let l = new LessThan(x, y);

            let m = new Machine(l, {'x': n, 'y': n1});
            let r = (m.eval().getValue()) as boolean;
            expect(r).to.equal(false);
        });

         it('should returns true, use variables, Add , Multiply', function() {
             let n = new CNumber(4);
             let n1 = new CNumber(5);
             let x = new CVariable('x');
             let y = new CVariable('y');
             let a = new Add(x,y);

             let m = new Multiply(x, y);

             let l = new LessThan(a, m);

             let ma = new Machine(l, {x: n, y: n1});
             let r = (ma.eval().getValue()) as boolean;
             expect(r).to.equal(true);
         });


        it('should returns true, use variables, Add , Multiply @3', function() {
            let n = new CNumber(4);
            let n1 = new CNumber(5);
            let x = new CVariable('x');
            let y = new CVariable('y');
            let a = new Add(n,n1);

            let m = new Multiply(n, y);

            let l = new LessThan(x, m);

            let ma = new Machine(l, {'x': a, 'y': n1});
            let r = (ma.eval().getValue()) as boolean;
            expect(r).to.equal(true);
        });

        it('should returns true, use variables, Add , Multiply @4', function() {
            let n = new CNumber(4);
            let n1 = new CNumber(5);
            let x = new CVariable('x');
            let y = new CVariable('y');
            let a = new Add(x,n1);

            let sumM = new Machine(a, {'x': n});
            let sum = (sumM.eval());

            let m = new Multiply(n, n1);

            //y assinged to m, see statement below
            let l = new LessThan(a, y);

            let ma = new Machine(l, {'x': sum, 'y': m});
            let r = (ma.eval().getValue()) as boolean;
            expect(r).to.equal(true);
        });

        it('should returns true, use variables, Add , Multiply @5', function() {
            let n = new CNumber(4);
            let n1 = new CNumber(5);
            let x = new CVariable('x');
            let y = new CVariable('y');
            let a = new Add(x,y);

            let sumM = new Machine(a, {'x': n, 'y': n1});
            let sum = (sumM.eval());

            let m = new Multiply(x, y);
            let mm = new Machine(a, {'x': n, 'y': n1});
            let product = (mm.eval());

            //y assinged to m, see statement below
            let l = new LessThan(a, m);

            let ma = new Machine(l, {'x': sum, 'y': product});
            let r = (ma.eval().getValue()) as boolean;
            expect(r).to.equal(true);
        });

        /*it('should returns true, use variables, Add , Multiply @6', function() {
            let n = new CNumber(4);
            let n1 = new CNumber(5);

            let x = new CVariable('x');
            let y = new CVariable('y');
            let a = new Add(x,y);

            //let sumM = new Machine(a, {'x': n, 'y': n1});
            //let sum = (sumM.eval());

            let m = new Multiply(x, y);
            //let mm = new Machine(a, {'x': n, 'y': n1});
            //let product = (mm.eval());

            //y assinged to m, see statement below
            let l = new LessThan(a, m);

            let ma = new Machine(l, {'x': a, 'y': m});
            //let r = (ma.eval().getValue()) as boolean;
            expect(r).to.equal(true);
        });*/

    });
});