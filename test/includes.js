var common = require('./common'),
  assert = require('assert'),
  should = require('should');

describe('Integration', function() {
  describe('Includes', function() {
    it('verify types', function(done) {
      // arrangec
      var WinJSRocks = require('winjsrocks');
      var WinJSRocksExtras = require('../src/main');

      // assert
      for (var pluginKey in WinJSRocksExtras.Plugin) {
        var classDef = WinJSRocksExtras.Plugin[pluginKey];
        classDef.prototype.should.be.an.instanceof(WinJSRocks.Plugin.Base);
      }

      for (var providerKey in WinJSRocksExtras.Provider) {
        var classDef = WinJSRocksExtras.Provider[providerKey];
        classDef.prototype.should.be.an.instanceof(WinJSRocks.Provider.Base);
      }

      for (var serviceKey in WinJSRocksExtras.Services) {
        var classDef = WinJSRocksExtras.Provider[serviceKey];
        classDef.prototype.should.be.an.instanceof(WinJSRocks.Service.Base);
      }

      return done();
    });
  });
});
