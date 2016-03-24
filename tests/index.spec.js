'use strict'

// var $ = require('nd-jquery')
var chai = require('chai')
var sinonChai = require('sinon-chai')
var View = require('../index')

var expect = chai.expect
// var sinon = window.sinon

chai.use(sinonChai)

/*globals describe,it*/

describe('View', function() {

  it('new View', function() {
    expect(View).to.be.a('function')
    expect(new View).to.be.a('object')
  })

})
