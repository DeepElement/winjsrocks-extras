var WinJSRocks = require('winjsrocks');
WinJSRocks.ioc.registerProvider("storage", require("./provider/indexdb-storage.js"))
