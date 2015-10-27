var WinJSRocks = require('winjsrocks');
WinJSRocks.ioc.registerProvider("localStorage", require("./provider/indexdb-storage.js"))
