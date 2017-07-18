// One test case has to pass and one has to fail

'use strict';

var expect = require('chai').expect;
var firstTest = require('../firstmodule.js');

describe('first npm publish test', function() {
    it('correct test case', function() {
	var result = firstTest.firstmodule();
	expect(result).to.equal('My First NPM Publish'); 
    });

});

