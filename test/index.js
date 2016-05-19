var assert = require('assert')
var Trace = require('..')

suite('URL Shortener', function () {
  suite('Twitter (t.co)', function () {
    test('should receive 3xx redirect for "https://t.co/fW61qZgOWm"', function (done) {
      new Trace('https://t.co/fW61qZgOWm')
        .resume().once('end', function () {
          assert.ok(this.statusCode < 400 && this.statusCode >= 300, 'HTTP ' + this.statusCode)
          done()
        })
    })

    test('should receive 3xx redirect for "t.co/fW61qZgOWm"', function (done) {
      new Trace('t.co/fW61qZgOWm')
        .resume().once('end', function () {
          assert.ok(this.statusCode < 400 && this.statusCode >= 300, 'HTTP ' + this.statusCode)
          done()
        })
    })
  })

  suite('New York Times (nyti.ms)', function () {
    test('should see tracking cookies from "nyti.ms/1QETHgV"')
  })

  suite('Bit.ly', function () {
    test('should see 1 more hop after "http://bit.ly/berlin-nodejs-meetup"')
  })
})

suite('Workaround', function () {
  suite('User-Agent', function () {
    test('Facebook should not redirect to "facebook.com/unsupportedbrowser"')
  })
})
