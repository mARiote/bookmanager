/**
 * Module dependencies.
 */
var app = require('../server');
var should = require('should');
var request = require('supertest');
var assert = require('assert');

/*

var mongoose = require('mongoose')e
  , context = describe
  , User = mongoose.model('User')
  , Article = mongoose.model('Article')

var count, cookies
*/

/**
 * Authors tests
 */

describe('Authors', function () {
/*
	before(function (done) {
		// create a user
		var user = new User({
		email: 'foobar@example.com',
		name: 'Foo bar',
		username: 'foobar',
		password: 'foobar'
		})
		user.save(done)
		})
*/
	describe('GET /authors', function () {
		it('should respond with Content-Type text/json', function (done) {
			request(app)
			.get('/authors')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(done);
		})
		
		it('should respond with Authors List', function(done) {
			request(app)
			.get('/authors')
			.end(function(err, res) {
				assert.equal(err, null);
				var body = res.body;
				assert.equal(body.success, 'true');
				assert.equal(body.data.length, body.total);
				assert.ok(body.total == 3);
				assert.equal(body.data[0].name, 'Author 1');
				assert.equal(body.data[1].name, 'Author 2');
				assert.equal(body.data[2].name, 'Author 3');
				done();
			});
		})
	});

	/*
  after(function (done) {
    require('./helper').clearDb(done)
  })
*/
});
