import WinJSRocks from "winjsrocks";
import Platform from "platform";

export default class extends WinJSRocks.Plugin.Base {
  constructor(application) {
    super(application, "platformFeatures", "runtime");
  }

  loadComponent(options, callback) {
    return super.loadComponent(options, function(err) {
      if (err)
        return callback(err);

      var body = document.body;
      body.setAttribute("data-platform-description", Platform.description);
      body.setAttribute("data-platform-layout", Platform.layout);
      body.setAttribute("data-platform-manufacturer", Platform.manufacturer);
      body.setAttribute("data-platform-name", Platform.name);
      body.setAttribute("data-platform-prerelease", Platform.prerelease);
      body.setAttribute("data-platform-product", Platform.product);
      body.setAttribute("data-platform-ua", Platform.ua);
      body.setAttribute("data-os-architecture", Platform.os.architecture);
      body.setAttribute("data-os-family", Platform.os.family);
      body.setAttribute("data-os-version", Platform.os.version);

      return callback();
    })
  }
};
