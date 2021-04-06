const {describe} = require('mocha');
const {expect} = require('chai');

const merge = require('../index');

var oa1 = require('./data/array_test/a1.json');
var oa2 = require('./data/array_test/a2.json');
var oa3 = require('./data/array_test/a3.json');
var oa4 = require('./data/array_test/a4.json');

var arrResult12 = merge(oa1,oa2);
var arrResult13 = merge(oa1,oa3);
console.log(arrResult13.components[0].foo);
var arrResult14 = merge(oa1,oa4);
describe('Array of Objects merge test :', function() {
    it('Single Index value merge [  ] ', function() {
        expect(arrResult12.components[0]).to.be.an('object');
        expect(arrResult12.components[0].foo.bar).to.be.an('number');
        expect(arrResult12.components[1].foo.nd).to.eql(oa2.components[1].foo.nd);
    });
    it('Multiple Index value merge [  ] ', function() {
        expect(arrResult13.components[0]).to.be.an('object');
        expect(arrResult13.components[0].foo.bar).to.be.an('number');
        expect(arrResult13.components[0].foo.nd).to.eql(oa1.components[0].foo.nd);
        expect(arrResult13.components[1].foo.nd).to.eql(oa3.components[1].foo.nd);
    });
    it('New Index value ', function() {
        expect(arrResult14.components[0]).to.be.an('object');
        expect(arrResult14.components[0].foo.bar).to.be.an('number');
        expect(arrResult14.components[0].foo.nd).to.eql(oa1.components[0].foo.nd);
        expect(arrResult14.components[2]).to.be.an('object');
        expect(arrResult14.components[2].foo.nd).to.eql(oa4.components[2].foo.nd);
    });
});