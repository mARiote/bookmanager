/**
 * Module dependencies.
 */
var app = require('../server');
var should = require('should');
var request = require('supertest');

/**
 * Routes tests
 */

describe('Home', function () {
	describe('GET /', function () {
		it('should respond with Content-Type text/html', function (done) {
			request(app)
			.get('/')
			.expect('Content-Type', /html/)
			.expect(200)
			.expect(/Book Manager/)
			.end(done);
		});
	});
});
