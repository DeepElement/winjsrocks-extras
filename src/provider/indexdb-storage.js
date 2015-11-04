import WinJSRocks from "winjsrocks";

export default class extends WinJSRocks.Provider.Base {
  constructor(application) {
    super(application);
  }

  get localStorageKey(){
    return this.application.instanceKey;
  }

  get(options, callback) {
    options = options || {};
    options.fileName = options.fileName || "";
    this._getCreateDb({}, function(err, db) {
      if (err)
        return callback(err);

      var tx = db.transaction(["files"], "readonly");
      var store = tx.objectStore("files");
      var request = store.get(options.fileName);

      request.onsuccess = function(e) {
        if (!e.target.result)
          return callback('does-not-exist');
        return callback(null, e.target.result);
      };

      request.onerror = function(e) {
        return callback('does-not-exist');
      };
    });
  }

  createOrUpdate(options, callback) {
    options.data = options.data || {};
    var that = this;
    this._getCreateDb({}, function(err, db) {
      if (err)
        return callback(err);

      that.get(options, function(err, fileDescriptor) {
        var tx = db.transaction(["files"], "readwrite");
        var store = tx.objectStore("files");
        if (err && err == "does-not-exist") {
          var fileDescriptor = {};
          fileDescriptor.lastModified = new Date();
          fileDescriptor.data = options.data;
          fileDescriptor.filename = options.fileName;
          var request = store.add(fileDescriptor);
          request.onsuccess = function(e) {
            return callback(null, fileDescriptor);
          };
          request.onerror = function(e) {
            return callback(e.target.error);
          };
        } else {
          fileDescriptor.data = options.data;
          fileDescriptor.lastModified = new Date();
          var request = store.put(fileDescriptor);
          request.onsuccess = function(e) {
            return callback(null, fileDescriptor);
          };
          request.onerror = function(e) {
            return callback(e.target.error);
          };
        }
      });
    });
  }

  del(options, callback) {
    var that = this;
    this._getCreateDb({}, function(err, db) {
      if (err)
        return callback(err);

      var tx = db.transaction(["files"], "readwrite");
      var store = tx.objectStore("files");
      var request = store.delete(options.fileName);
      request.onsuccess = function(e) {
        return callback();
      };
      request.onerror = function(e) {
        return callback(e.target.error);
      };
    });
  }

  _getCreateDb(data, callback) {
    var that = this;
    var openRequest = indexedDB.open(that.localStorageKey, 1);
    openRequest.onupgradeneeded = function(e) {
      var thisDB = e.target.result;
      var store = null;
      if (!thisDB.objectStoreNames.contains("files")) {
        store = thisDB.createObjectStore("files", {
          keyPath: "filename"
        });
      }
    };
    openRequest.onsuccess = function(e) {
      var db = e.target.result;
      return callback(null, db);
    };
    openRequest.onerror = function(e) {
      return callback(e);
    };
  }
};
