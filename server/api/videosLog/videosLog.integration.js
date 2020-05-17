/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

describe('VideosLog API:', function() {
    describe('GET /api/videosLogs', function() {
        var videosLogs;

        beforeEach(function(done) {
            request(app)
        .get('/api/videosLogs')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
            if(err) {
                return done(err);
            }
            videosLogs = res.body;
            done();
        });
        });

        it('should respond with JSON array', function() {
            expect(videosLogs).to.be.instanceOf(Array);
        });
    });
});
