import {arrayColumn} from '../src/algebra'
let expect = require('chai').expect;

describe('arrayColumn test', function() {
    describe('#arrayColumn empty', function() {
        it('should returns empty array', function() {
            let n = arrayColumn([], 0)
            expect(n).that.is.empty
        });

        it('should returns first column', function() {
            let n = arrayColumn([[1,2,3],[4,5,6],[7,8,9]], 0)
            expect(n).to.deep.equal([1,4,7])
        });

        it('should returns last column', function() {
            let n = arrayColumn([[1,2,3],[4,5,6],[7,8,9]], 2)
            expect(n).to.deep.equal([3, 6, 9])
        });

        it('should returns last + 1 column', function() {
            let n = arrayColumn([[1,2,3],[4,5,6],[7,8,9]], 3)
            expect(n).to.deep.equal([undefined, undefined, undefined])
        });
    });
});