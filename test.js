'use strict';

var expect = require('chai').expect;
var tcp = require('../TCPserver/TCPserver');
var vanilla = require('../vanillaHTTPServer/vanillaHTTPserver');
var http = require('http');
var net = require('net');
var chaiHTTP = require('chai-http');

describe('tcp server should log unique names from gen-id', function(){
	before(function(){
		tcp;
	});
	it('should write new file name', function(){
		net.get('localhost:5000'); 
		var filename = __dirname + './../' + request +'.txt';
		expect(filename).to.exist;
	});
});

describe('vanilla HTTP server should give time or greet person by name', function(){
	it('should greet someone by name when GET/greet', function(done){
		chai.request('http://localhost:4000')
			.get('greetdexter')
			.end(function(err, res){
				if(err) {return err};
				expect(res.header("Content-type": "text/plain")).to.eql('hello dexter');
			});
	});

	//make test for post!

	it('should give back time when GET/time', function(done){
		chai.request('http://localhost:4000')
			.get('/time')
			.end(function(err, res) {
				if(err) {return err};
				expect(res.status).to.eql(200);
			});
	});

	//test 404
});
