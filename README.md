<img align="right" src="https://raw.githubusercontent.com/DeepElement/winjsrocks/stable/docs/logos/WinJS.rocks-256x256.png">

#WinJSRocks-Extras

Contains helpful tools for use with the [WinJSRocks](http://winjs.rocks) MVVM library. 

## Plugins 
Plugins are the recommended way of bolting on features into the WinJSRocks application life-cycle.
These components are loaded *after* the core framework has loaded and enables access to all of the goodies (Services/Providers) without any load order mishaps.

To activate, just register your plugin in the `application.configure` plugins collection:
``` javascript
var WinJSRocks = require('winjsrocks');
var WinJSRocksExtras = require('winjsrocks-extras');
var app = new WinJSRocks.Application();
app.configure({
    plugins:[
      new MyAwesomePlugin(app)
    ]
  },
  function(err){
  });
``` 

- `Plugin.PlatformFeature` - Uses the [platform](https://www.npmjs.com/package/platform) package to append device/platform data attributes to the document header`


## Providers
The WinJSRocks Framework provides the ability to override built in providers, which happens a bit earlier than Plugin registrations. In addition, you can write your own providers and access them via the `WinJSRocks.Application.Instance.Container` api.

To activate a provider:
``` javascript
var WinJSRocks = require('winjsrocks');
var WinJSRocksExtras = require('winjsrocks-extras');
var app = new WinJSRocks.Application();
app.builder.registerProvider("localStorage", WinJSRocksExtras.Provider.IndexDBStorage);
``` 

- `Provider.IndexDBStorage` - IndexDB implementation of the WinJSRocks `localStorage` provider

