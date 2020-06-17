import {gcd, ex_gcd , isPrime, factor, findInitailValueOfDiophantine} from "../src/NumberTheory"

let expect = require('chai').expect;

describe('NumberTheory', function() {
    describe('#gcd', function() {
        it('should returns 1', function() {
            let d = gcd(3,2);
            expect(d).to.equal(1);
        });

        it('should return 2', function(){
            let d = gcd(4,2)
        });
    });

    //ex_gcd
    describe('#ex_gcd', function() {
        it('ex_gcd test 1', function() {
            var a :number, b:number, r: number;
            [a, b, r] = ex_gcd(46, 35);
            let c = 46*a + 35*b;
            expect(c).to.equal(r);
        });

        it('ex_gcd test 1', function() {
            var a :number, b:number, r: number;
            [a, b, r] = ex_gcd(20, 10);
            let c = 20*a + 10*b;
            expect(c).to.equal(r);
        });

        it('ex_gcd test 1', function() {
            var a :number, b:number, r: number;
            [a, b, r] = ex_gcd(202345, 100012);
            let c = 202345*a + 100012*b;
            expect(c).to.equal(r);
        });

    });

    //isPrime
    describe('#isPrime', function() {
        it('isPrime test 3', function() {
            let r = isPrime(3)
        
            expect(r).to.be.true;
        });

        it('isPrime test 4', function() {
            let r = isPrime(4)
        
            expect(r).to.be.false;
        });

        it('isPrime test 103', function() {
            let r = isPrime(103)
        
            expect(r).to.be.true;
        });
    });

    describe('#factor', function() {
        it('factor test 3', function() {
            let r = factor(3)
        
            expect(r).to.eql([3]); // passes
        });

        it('factor test 4', function() {
            let r = factor(4)
        
            expect(r).to.eql([2, 2]); // passes
        });

        it('factor test 103', function() {
            let r = factor(103)
        
            expect(r).to.eql([103]); // passes
        });

        it('factor test 25', function() {
            let r = factor(25)
        
            expect(r).to.eql([5, 5]); // passes
        });

        it('factor test 10', function() {
            let r = factor(10)
            expect(r).to.eql([2, 5]); // passes
        });

        it('factor test 256', function() {
            let r = factor(256)
        
            expect(r).to.eql([2, 2, 2,2,2,2,2,2]); // passes
        });

        it('factor test 10934', function() {
            let r = factor(10934)
        
            expect(r).to.eql([2, 7,11,71]); // passes
        });
    });
    //findInitailValueOfDiophantine
    describe('#findInitailValueOfDiophantine', function() {
        it('findInitailValueOfDiophantine test 258x + 354y = 1', function() {
            let r = findInitailValueOfDiophantine(258, 354, 18);
        
            expect(r).to.eql([33, -24]); // passes
        });

        it('findInitailValueOfDiophantine test 23x + 17y = 1', function() {
            //
            let r = findInitailValueOfDiophantine(23, 17, 1);
        
            expect(r).to.eql([3, -4]); // passes
        });
    });
});