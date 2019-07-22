/* Copyright (c) 2010-2015 Richard Rodger, MIT License */

'use strict'

var Path = require('path')
var Code = require('code')
var Lab = require('@hapi/lab')

var Print = require('../lib/print.js')

var lab = (exports.lab = Lab.script())
var describe = lab.describe
var expect = Code.expect

var Shared = require('./shared')
var it = Shared.make_it(lab)

var Seneca = require('..')

describe('print', function() {
  it('init', function(fin) {
    var si = Seneca().test(fin)
    Print(si, ['', ''])
    Print(si, ['', '', '--seneca.print.options'])
    fin()
  })

  it('options', function(fin) {
    var si = Seneca({ debug: { print: { options: true } } })
      .test(fin)
      .add('a:1', function(msg, reply) {
        reply({ x: 1 })
      })
    fin()
  })

  it('print', function(fin) {
    Print.print(new Error('foo'))
    Print.print(null, { foo: 1 })
    fin()
  })
})
