/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var videosLogCtrlStub = {
    index: 'videosLogCtrl.index'
};

var routerStub = {
    get: sinon.spy()
};

// require the index with our stubbed out modules
var videosLogIndex = proxyquire('./index.js', {
    express: {
        Router() {
            return routerStub;
        }
    },
    './videosLog.controller': videosLogCtrlStub
});

describe('VideosLog API Router:', function() {
    it('should return an express router instance', function() {
        expect(videosLogIndex).to.equal(routerStub);
    });

    describe('GET /api/videosLogs', function() {
        it('should route to videosLog.controller.index', function() {
            expect(routerStub.get
        .withArgs('/', 'videosLogCtrl.index')
        ).to.have.been.calledOnce;
        });
    });
});
