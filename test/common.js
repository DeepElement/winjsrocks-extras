var jsdom = require('jsdom'),
  path = require('path');

var winJSShim = function() {
  global = global || {};
  global.window = global.window || {};
  global.msWriteProfilerMark = function() {};
  global.addEventListener = function() {};
  global.navigator = {
    userAgent: ""
  };
  global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
};

var deleteRequireModulesInPath = function(path) {
  for (var key in require.cache) {
    if (require.cache[key].id.indexOf(path) > -1)
      delete require.cache[key];
  }
};

beforeEach(function(done) {
  jsdom.env("<html></html>", function(err, window) {
    if (err)
      return done(err);

    // SHIM Globals
    winJSShim();

    global.window = window;
    global.window.process = global.window.process || {};
    global.window.process.env = global.window.process.env || {};
    global.document = window.document;

    deleteRequireModulesInPath(path.join(__dirname, ".."));

    require('winjs');

    return done();
  });
});
