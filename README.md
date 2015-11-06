<img align="right" src="https://raw.githubusercontent.com/DeepElement/winjsrocks/stable/docs/logos/WinJS.rocks-256x256.png">

#WinJSRocks-Extras

Contains helpful tools for use with the [WinJSRocks](http://winjs.rocks) MVVM library. 

## TL;TR - Bootstrap Everything!

``` javascript
var WinJSRocks = require('winjsrocks');
var WinJSRocksExtras = require('winjsrocks-extras');
var app = new WinJSRocks.Application();
app.builder.registerProvider("localStorage", WinJSRocksExtras.Provider.IndexDBStorage);
app.configure({
    plugins:[
      new WinJSRocksExtras.Plugin.PlatformFeature(app)
    ]
  },
  function(err){
    // App is ready to have 'load' called!
  });
```

## Plugins 

- `Plugin.PlatformFeature` - Uses the [platform](https://www.npmjs.com/package/platform) package to append device/platform data attributes to the document header`


## Providers

- `Provider.IndexDBStorage` - IndexDB implementation of the WinJSRocks `localStorage` provider

