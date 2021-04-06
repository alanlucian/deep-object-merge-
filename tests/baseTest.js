const {describe} = require('mocha');
const {expect} = require('chai');

const merge = require('../index');


var initialData = require('./data/test1/data1.json');
var newData = require('./data/test1/data2.json');
var result1 = merge(initialData,newData);

describe('Object merge test :', function() {
    it('Single value merge ', function() {
        expect(result1.Position.Rotation.z).to.eql(newData.Position.Rotation.z);
    });
});
