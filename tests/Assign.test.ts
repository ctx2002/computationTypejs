import {CNumber, CVariable} from "../src/TSNumber";
import { Add } from "../src/Add";
import {Machine} from "../src/Machine";
import {Assign} from "../src/Assign";
import {Multiply} from "../src/Multiply";

let expect = require('chai').expect;

describe('Assign statement', function() {
    describe('#reduce', function() {
        it('statement 1', function() {
            let n = new CNumber(4);
            let n1 = new CNumber(5);
            let add = new Add(n, n1);
			let an = new Assign(new CVariable('x'), add);

			let n2 = new CNumber(4);
            let n3 = new CNumber(5);
            let add1 = new Add(n2, n3);
			let an1 = new Assign(new CVariable('y'), add1);
			
			let add2 =  new Add(new CVariable('x') , new CVariable('y'));

			let m = new Machine(add2, {'x': an, 'y': an1});
            let n5 = ((m.eval()).getValue()) as number;
            expect(n5).to.equal(18);
        });

        it('statement 2', function() {
            let n = new CNumber(4);
            let n1 = new CNumber(5);
            let add = new Add(n, n1);
            let an = new Assign(new CVariable('x'), add);

            let n2 = new CNumber(4);
            let n3 = new CNumber(5);
            let add1 = new Multiply(n2, n3);
            let an1 = new Assign(new CVariable('y'), add1);

            let add2 =  new Add(new CVariable('x') , new CVariable('y'));

            let m = new Machine(add2, {'x': an, 'y': an1});
            let n5 = ((m.eval()).getValue()) as number;
            expect(n5).to.equal(29);
        });

        it('statement 3', function() {
            /*let n = new CNumber(4);
            let n1 = new CNumber(5);
            let add = new Add(n, n1);
            let an = new Assign(new CVariable('x'), add);
            */
            let n2 = new CNumber(4);
            let n3 = new CNumber(5);
            let add1 = new Multiply(n2, n3);
            let an = new Assign(new CVariable('x'), add1);
            let an1 = new Assign(new CVariable('y'), add1);

            let add2 =  new Add(new CVariable('x') , new CVariable('y'));

            let m = new Machine(add2, {'x': an, 'y': an1});
            let n5 = ((m.eval()).getValue()) as number;
            expect(n5).to.equal(40);
        });
    });
});