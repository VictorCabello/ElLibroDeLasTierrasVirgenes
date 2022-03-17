
  var Module = typeof Module !== 'undefined' ? Module : {};
  
  if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0;
  }
  Module.expectedDataFileDownloads++;
  (function() {
   var loadPackage = function(metadata) {
  
      var PACKAGE_PATH;
      if (typeof window === 'object') {
        PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
      } else if (typeof location !== 'undefined') {
        // worker
        PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
      } else {
        throw 'using preloaded data can only be done on a web page or in a web worker';
      }
      var PACKAGE_NAME = 'pyapp.data';
      var REMOTE_PACKAGE_BASE = 'pyapp.data';
      if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
        Module['locateFile'] = Module['locateFilePackage'];
        err('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
      }
      var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
    
      var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];
      var PACKAGE_UUID = metadata['package_uuid'];
    
      function fetchRemotePackage(packageName, packageSize, callback, errback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', packageName, true);
        xhr.responseType = 'arraybuffer';
        xhr.onprogress = function(event) {
          var url = packageName;
          var size = packageSize;
          if (event.total) size = event.total;
          if (event.loaded) {
            if (!xhr.addedTotal) {
              xhr.addedTotal = true;
              if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
              Module.dataFileDownloads[url] = {
                loaded: event.loaded,
                total: size
              };
            } else {
              Module.dataFileDownloads[url].loaded = event.loaded;
            }
            var total = 0;
            var loaded = 0;
            var num = 0;
            for (var download in Module.dataFileDownloads) {
            var data = Module.dataFileDownloads[download];
              total += data.total;
              loaded += data.loaded;
              num++;
            }
            total = Math.ceil(total * Module.expectedDataFileDownloads/num);
            if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
          } else if (!Module.dataFileDownloads) {
            if (Module['setStatus']) Module['setStatus']('Downloading data...');
          }
        };
        xhr.onerror = function(event) {
          throw new Error("NetworkError for: " + packageName);
        }
        xhr.onload = function(event) {
          if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            var packageData = xhr.response;
            callback(packageData);
          } else {
            throw new Error(xhr.statusText + " : " + xhr.responseURL);
          }
        };
        xhr.send(null);
      };

      function handleError(error) {
        console.error('package error:', error);
      };
    
    function runWithFS() {
  
      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
  Module['FS_createPath']("/", "_dummy_thread", true, true);
Module['FS_createPath']("/", "http", true, true);
Module['FS_createPath']("/", "xmlrpc", true, true);
Module['FS_createPath']("/", "_thread", true, true);
Module['FS_createPath']("/", "libpasteurize", true, true);
Module['FS_createPath']("/libpasteurize", "fixes", true, true);
Module['FS_createPath']("/", "six-1.12.0.dist-info", true, true);
Module['FS_createPath']("/", "socketserver", true, true);
Module['FS_createPath']("/", "past", true, true);
Module['FS_createPath']("/past", "builtins", true, true);
Module['FS_createPath']("/past", "types", true, true);
Module['FS_createPath']("/past", "utils", true, true);
Module['FS_createPath']("/past", "translation", true, true);
Module['FS_createPath']("/", "builtins", true, true);
Module['FS_createPath']("/", "libfuturize", true, true);
Module['FS_createPath']("/libfuturize", "fixes", true, true);
Module['FS_createPath']("/", "bin", true, true);
Module['FS_createPath']("/", "html", true, true);
Module['FS_createPath']("/", "lib", true, true);
Module['FS_createPath']("/lib", "python2.7", true, true);
Module['FS_createPath']("/lib/python2.7", "site-packages", true, true);
Module['FS_createPath']("/lib/python2.7/site-packages", "pygame_sdl2", true, true);
Module['FS_createPath']("/lib/python2.7/site-packages/pygame_sdl2", "threads", true, true);
Module['FS_createPath']("/", "_markupbase", true, true);
Module['FS_createPath']("/", "future-0.18.2.dist-info", true, true);
Module['FS_createPath']("/", "future", true, true);
Module['FS_createPath']("/future", "builtins", true, true);
Module['FS_createPath']("/future", "backports", true, true);
Module['FS_createPath']("/future/backports", "http", true, true);
Module['FS_createPath']("/future/backports", "xmlrpc", true, true);
Module['FS_createPath']("/future/backports", "html", true, true);
Module['FS_createPath']("/future/backports", "email", true, true);
Module['FS_createPath']("/future/backports/email", "mime", true, true);
Module['FS_createPath']("/future/backports", "test", true, true);
Module['FS_createPath']("/future/backports", "urllib", true, true);
Module['FS_createPath']("/future", "standard_library", true, true);
Module['FS_createPath']("/future", "tests", true, true);
Module['FS_createPath']("/future", "moves", true, true);
Module['FS_createPath']("/future/moves", "dbm", true, true);
Module['FS_createPath']("/future/moves", "http", true, true);
Module['FS_createPath']("/future/moves", "xmlrpc", true, true);
Module['FS_createPath']("/future/moves", "html", true, true);
Module['FS_createPath']("/future/moves", "test", true, true);
Module['FS_createPath']("/future/moves", "urllib", true, true);
Module['FS_createPath']("/future/moves", "tkinter", true, true);
Module['FS_createPath']("/future", "types", true, true);
Module['FS_createPath']("/future", "utils", true, true);
Module['FS_createPath']("/", "copyreg", true, true);
Module['FS_createPath']("/", "winreg", true, true);
Module['FS_createPath']("/", "typing-3.10.0.0.dist-info", true, true);
Module['FS_createPath']("/", "queue", true, true);
Module['FS_createPath']("/", "tkinter", true, true);
Module['FS_createPath']("/", "reprlib", true, true);

          /** @constructor */
          function DataRequest(start, end, audio) {
            this.start = start;
            this.end = end;
            this.audio = audio;
          }
          DataRequest.prototype = {
            requests: {},
            open: function(mode, name) {
              this.name = name;
              this.requests[name] = this;
              Module['addRunDependency']('fp ' + this.name);
            },
            send: function() {},
            onload: function() {
              var byteArray = this.byteArray.subarray(this.start, this.end);
              this.finish(byteArray);
            },
            finish: function(byteArray) {
              var that = this;
      
          Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
          Module['removeRunDependency']('fp ' + that.name);
  
              this.requests[this.name] = null;
            }
          };
      
              var files = metadata['files'];
              for (var i = 0; i < files.length; ++i) {
                new DataRequest(files[i]['start'], files[i]['end'], files[i]['audio']).open('GET', files[i]['filename']);
              }
      
        
        var indexedDB;
        if (typeof window === 'object') {
          indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        } else if (typeof location !== 'undefined') {
          // worker
          indexedDB = self.indexedDB;
        } else {
          throw 'using IndexedDB to cache data can only be done on a web page or in a web worker';
        }
        var IDB_RO = "readonly";
        var IDB_RW = "readwrite";
        var DB_NAME = "EM_PRELOAD_CACHE";
        var DB_VERSION = 1;
        var METADATA_STORE_NAME = 'METADATA';
        var PACKAGE_STORE_NAME = 'PACKAGES';
        function openDatabase(callback, errback) {
          try {
            var openRequest = indexedDB.open(DB_NAME, DB_VERSION);
          } catch (e) {
            return errback(e);
          }
          openRequest.onupgradeneeded = function(event) {
            var db = event.target.result;

            if(db.objectStoreNames.contains(PACKAGE_STORE_NAME)) {
              db.deleteObjectStore(PACKAGE_STORE_NAME);
            }
            var packages = db.createObjectStore(PACKAGE_STORE_NAME);

            if(db.objectStoreNames.contains(METADATA_STORE_NAME)) {
              db.deleteObjectStore(METADATA_STORE_NAME);
            }
            var metadata = db.createObjectStore(METADATA_STORE_NAME);
          };
          openRequest.onsuccess = function(event) {
            var db = event.target.result;
            callback(db);
          };
          openRequest.onerror = function(error) {
            errback(error);
          };
        };

        // This is needed as chromium has a limit on per-entry files in IndexedDB
        // https://cs.chromium.org/chromium/src/content/renderer/indexed_db/webidbdatabase_impl.cc?type=cs&sq=package:chromium&g=0&l=177
        // https://cs.chromium.org/chromium/src/out/Debug/gen/third_party/blink/public/mojom/indexeddb/indexeddb.mojom.h?type=cs&sq=package:chromium&g=0&l=60
        // We set the chunk size to 64MB to stay well-below the limit
        var CHUNK_SIZE = 64 * 1024 * 1024;

        function cacheRemotePackage(
          db,
          packageName,
          packageData,
          packageMeta,
          callback,
          errback
        ) {
          var transactionPackages = db.transaction([PACKAGE_STORE_NAME], IDB_RW);
          var packages = transactionPackages.objectStore(PACKAGE_STORE_NAME);
          var chunkSliceStart = 0;
          var nextChunkSliceStart = 0;
          var chunkCount = Math.ceil(packageData.byteLength / CHUNK_SIZE);
          var finishedChunks = 0;
          for (var chunkId = 0; chunkId < chunkCount; chunkId++) {
            nextChunkSliceStart += CHUNK_SIZE;
            var putPackageRequest = packages.put(
              packageData.slice(chunkSliceStart, nextChunkSliceStart),
              'package/' + packageName + '/' + chunkId
            );
            chunkSliceStart = nextChunkSliceStart;
            putPackageRequest.onsuccess = function(event) {
              finishedChunks++;
              if (finishedChunks == chunkCount) {
                var transaction_metadata = db.transaction(
                  [METADATA_STORE_NAME],
                  IDB_RW
                );
                var metadata = transaction_metadata.objectStore(METADATA_STORE_NAME);
                var putMetadataRequest = metadata.put(
                  {
                    'uuid': packageMeta.uuid,
                    'chunkCount': chunkCount
                  },
                  'metadata/' + packageName
                );
                putMetadataRequest.onsuccess = function(event) {
                  callback(packageData);
                };
                putMetadataRequest.onerror = function(error) {
                  errback(error);
                };
              }
            };
            putPackageRequest.onerror = function(error) {
              errback(error);
            };
          }
        }

        /* Check if there's a cached package, and if so whether it's the latest available */
        function checkCachedPackage(db, packageName, callback, errback) {
          var transaction = db.transaction([METADATA_STORE_NAME], IDB_RO);
          var metadata = transaction.objectStore(METADATA_STORE_NAME);
          var getRequest = metadata.get('metadata/' + packageName);
          getRequest.onsuccess = function(event) {
            var result = event.target.result;
            if (!result) {
              return callback(false, null);
            } else {
              return callback(PACKAGE_UUID === result['uuid'], result);
            }
          };
          getRequest.onerror = function(error) {
            errback(error);
          };
        }

        function fetchCachedPackage(db, packageName, metadata, callback, errback) {
          var transaction = db.transaction([PACKAGE_STORE_NAME], IDB_RO);
          var packages = transaction.objectStore(PACKAGE_STORE_NAME);

          var chunksDone = 0;
          var totalSize = 0;
          var chunkCount = metadata['chunkCount'];
          var chunks = new Array(chunkCount);

          for (var chunkId = 0; chunkId < chunkCount; chunkId++) {
            var getRequest = packages.get('package/' + packageName + '/' + chunkId);
            getRequest.onsuccess = function(event) {
              // If there's only 1 chunk, there's nothing to concatenate it with so we can just return it now
              if (chunkCount == 1) {
                callback(event.target.result);
              } else {
                chunksDone++;
                totalSize += event.target.result.byteLength;
                chunks.push(event.target.result);
                if (chunksDone == chunkCount) {
                  if (chunksDone == 1) {
                    callback(event.target.result);
                  } else {
                    var tempTyped = new Uint8Array(totalSize);
                    var byteOffset = 0;
                    for (var chunkId in chunks) {
                      var buffer = chunks[chunkId];
                      tempTyped.set(new Uint8Array(buffer), byteOffset);
                      byteOffset += buffer.byteLength;
                      buffer = undefined;
                    }
                    chunks = undefined;
                    callback(tempTyped.buffer);
                    tempTyped = undefined;
                  }
                }
              }
            };
            getRequest.onerror = function(error) {
              errback(error);
            };
          }
        }
      
      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        
          // Reuse the bytearray from the XHR as the source for file reads.
          DataRequest.prototype.byteArray = byteArray;
    
            var files = metadata['files'];
            for (var i = 0; i < files.length; ++i) {
              DataRequest.prototype.requests[files[i].filename].onload();
            }
                Module['removeRunDependency']('datafile_pyapp.data');

      };
      Module['addRunDependency']('datafile_pyapp.data');
    
      if (!Module.preloadResults) Module.preloadResults = {};
    
        function preloadFallback(error) {
          console.error(error);
          console.error('falling back to default preload behavior');
          fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, processPackageData, handleError);
        };

        openDatabase(
          function(db) {
            checkCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME,
              function(useCached, metadata) {
                Module.preloadResults[PACKAGE_NAME] = {fromCache: useCached};
                if (useCached) {
                  fetchCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME, metadata, processPackageData, preloadFallback);
                } else {
                  fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE,
                    function(packageData) {
                      cacheRemotePackage(db, PACKAGE_PATH + PACKAGE_NAME, packageData, {uuid:PACKAGE_UUID}, processPackageData,
                        function(error) {
                          console.error(error);
                          processPackageData(packageData);
                        });
                    }
                  , preloadFallback);
                }
              }
            , preloadFallback);
          }
        , preloadFallback);

        if (Module['setStatus']) Module['setStatus']('Downloading...');
      
    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }
  
   }
   loadPackage({"files": [{"filename": "/web-presplash-default.jpg", "start": 0, "end": 224232, "audio": 0}, {"filename": "/six.pyo", "start": 224232, "end": 251851, "audio": 0}, {"filename": "/typing.pyo", "start": 251851, "end": 321357, "audio": 0}, {"filename": "/_dummy_thread/__init__.pyo", "start": 321357, "end": 321884, "audio": 0}, {"filename": "/http/cookies.pyo", "start": 321884, "end": 322149, "audio": 0}, {"filename": "/http/client.pyo", "start": 322149, "end": 324437, "audio": 0}, {"filename": "/http/__init__.pyo", "start": 324437, "end": 324878, "audio": 0}, {"filename": "/http/cookiejar.pyo", "start": 324878, "end": 325109, "audio": 0}, {"filename": "/http/server.pyo", "start": 325109, "end": 325587, "audio": 0}, {"filename": "/xmlrpc/client.pyo", "start": 325587, "end": 325817, "audio": 0}, {"filename": "/xmlrpc/__init__.pyo", "start": 325817, "end": 326260, "audio": 0}, {"filename": "/xmlrpc/server.pyo", "start": 326260, "end": 326490, "audio": 0}, {"filename": "/_thread/__init__.pyo", "start": 326490, "end": 327005, "audio": 0}, {"filename": "/libpasteurize/__init__.pyo", "start": 327005, "end": 327119, "audio": 0}, {"filename": "/libpasteurize/main.pyo", "start": 327119, "end": 332314, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_future_builtins.pyo", "start": 332314, "end": 333802, "audio": 0}, {"filename": "/libpasteurize/fixes/__init__.pyo", "start": 333802, "end": 334732, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_imports2.pyo", "start": 334732, "end": 344473, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_features.pyo", "start": 344473, "end": 347512, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_raise_.pyo", "start": 347512, "end": 349012, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_getcwd.pyo", "start": 349012, "end": 350098, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_newstyle.pyo", "start": 350098, "end": 351423, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_unpacking.pyo", "start": 351423, "end": 356603, "audio": 0}, {"filename": "/libpasteurize/fixes/feature_base.pyo", "start": 356603, "end": 358284, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_division.pyo", "start": 358284, "end": 359407, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_memoryview.pyo", "start": 359407, "end": 360283, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_throw.pyo", "start": 360283, "end": 361558, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_add_all_future_builtins.pyo", "start": 361558, "end": 362438, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_add_future_standard_library_import.pyo", "start": 362438, "end": 363310, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_next.pyo", "start": 363310, "end": 364948, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_imports.pyo", "start": 364948, "end": 368918, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_annotations.pyo", "start": 368918, "end": 370708, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_raise.pyo", "start": 370708, "end": 372189, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_printfunction.pyo", "start": 372189, "end": 372966, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_kwargs.pyo", "start": 372966, "end": 376670, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_fullargspec.pyo", "start": 376670, "end": 377536, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_add_all__future__imports.pyo", "start": 377536, "end": 378447, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_metaclass.pyo", "start": 378447, "end": 380804, "audio": 0}, {"filename": "/six-1.12.0.dist-info/top_level.txt", "start": 380804, "end": 380808, "audio": 0}, {"filename": "/six-1.12.0.dist-info/METADATA", "start": 380808, "end": 382748, "audio": 0}, {"filename": "/six-1.12.0.dist-info/RECORD", "start": 382748, "end": 383285, "audio": 0}, {"filename": "/six-1.12.0.dist-info/INSTALLER", "start": 383285, "end": 383289, "audio": 0}, {"filename": "/six-1.12.0.dist-info/LICENSE", "start": 383289, "end": 384355, "audio": 0}, {"filename": "/six-1.12.0.dist-info/WHEEL", "start": 384355, "end": 384465, "audio": 0}, {"filename": "/socketserver/__init__.pyo", "start": 384465, "end": 384952, "audio": 0}, {"filename": "/past/__init__.pyo", "start": 384952, "end": 385242, "audio": 0}, {"filename": "/past/builtins/noniterators.pyo", "start": 385242, "end": 387365, "audio": 0}, {"filename": "/past/builtins/__init__.pyo", "start": 387365, "end": 388461, "audio": 0}, {"filename": "/past/builtins/misc.pyo", "start": 388461, "end": 390798, "audio": 0}, {"filename": "/past/types/__init__.pyo", "start": 390798, "end": 391323, "audio": 0}, {"filename": "/past/types/oldstr.pyo", "start": 391323, "end": 393889, "audio": 0}, {"filename": "/past/types/basestring.pyo", "start": 393889, "end": 394931, "audio": 0}, {"filename": "/past/types/olddict.pyo", "start": 394931, "end": 396693, "audio": 0}, {"filename": "/past/utils/__init__.pyo", "start": 396693, "end": 398172, "audio": 0}, {"filename": "/past/translation/__init__.pyo", "start": 398172, "end": 408046, "audio": 0}, {"filename": "/builtins/__init__.pyo", "start": 408046, "end": 408599, "audio": 0}, {"filename": "/libfuturize/__init__.pyo", "start": 408599, "end": 408711, "audio": 0}, {"filename": "/libfuturize/fixer_util.pyo", "start": 408711, "end": 419360, "audio": 0}, {"filename": "/libfuturize/main.pyo", "start": 419360, "end": 427452, "audio": 0}, {"filename": "/libfuturize/fixes/fix_future_builtins.pyo", "start": 427452, "end": 429034, "audio": 0}, {"filename": "/libfuturize/fixes/fix_object.pyo", "start": 429034, "end": 429772, "audio": 0}, {"filename": "/libfuturize/fixes/fix_print_with_import.pyo", "start": 429772, "end": 430548, "audio": 0}, {"filename": "/libfuturize/fixes/__init__.pyo", "start": 430548, "end": 432914, "audio": 0}, {"filename": "/libfuturize/fixes/fix_absolute_import.pyo", "start": 432914, "end": 434978, "audio": 0}, {"filename": "/libfuturize/fixes/fix_cmp.pyo", "start": 434978, "end": 435985, "audio": 0}, {"filename": "/libfuturize/fixes/fix_add__future__imports_except_unicode_literals.pyo", "start": 435985, "end": 436932, "audio": 0}, {"filename": "/libfuturize/fixes/fix_basestring.pyo", "start": 436932, "end": 437682, "audio": 0}, {"filename": "/libfuturize/fixes/fix_division.pyo", "start": 437682, "end": 437888, "audio": 0}, {"filename": "/libfuturize/fixes/fix_input.pyo", "start": 437888, "end": 438600, "audio": 0}, {"filename": "/libfuturize/fixes/fix_division_safe.pyo", "start": 438600, "end": 441448, "audio": 0}, {"filename": "/libfuturize/fixes/fix_execfile.pyo", "start": 441448, "end": 442480, "audio": 0}, {"filename": "/libfuturize/fixes/fix_unicode_literals_import.pyo", "start": 442480, "end": 443287, "audio": 0}, {"filename": "/libfuturize/fixes/fix_order___future__imports.pyo", "start": 443287, "end": 444052, "audio": 0}, {"filename": "/libfuturize/fixes/fix_bytes.pyo", "start": 444052, "end": 445006, "audio": 0}, {"filename": "/libfuturize/fixes/fix_raise.pyo", "start": 445006, "end": 447044, "audio": 0}, {"filename": "/libfuturize/fixes/fix_print.pyo", "start": 447044, "end": 449325, "audio": 0}, {"filename": "/libfuturize/fixes/fix_future_standard_library_urllib.pyo", "start": 449325, "end": 450222, "audio": 0}, {"filename": "/libfuturize/fixes/fix_UserDict.pyo", "start": 450222, "end": 452681, "audio": 0}, {"filename": "/libfuturize/fixes/fix_xrange_with_import.pyo", "start": 452681, "end": 453442, "audio": 0}, {"filename": "/libfuturize/fixes/fix_remove_old__future__imports.pyo", "start": 453442, "end": 454330, "audio": 0}, {"filename": "/libfuturize/fixes/fix_unicode_keep_u.pyo", "start": 454330, "end": 455214, "audio": 0}, {"filename": "/libfuturize/fixes/fix_oldstr_wrap.pyo", "start": 455214, "end": 456512, "audio": 0}, {"filename": "/libfuturize/fixes/fix_next_call.pyo", "start": 456512, "end": 459576, "audio": 0}, {"filename": "/libfuturize/fixes/fix_metaclass.pyo", "start": 459576, "end": 465138, "audio": 0}, {"filename": "/libfuturize/fixes/fix_future_standard_library.pyo", "start": 465138, "end": 465957, "audio": 0}, {"filename": "/bin/pasteurize", "start": 465957, "end": 466260, "audio": 0}, {"filename": "/bin/futurize", "start": 466260, "end": 466561, "audio": 0}, {"filename": "/html/__init__.pyo", "start": 466561, "end": 467045, "audio": 0}, {"filename": "/html/entities.pyo", "start": 467045, "end": 467364, "audio": 0}, {"filename": "/html/parser.pyo", "start": 467364, "end": 467780, "audio": 0}, {"filename": "/lib/python2.7/threading.pyo", "start": 467780, "end": 472218, "audio": 0}, {"filename": "/lib/python2.7/subprocess.pyo", "start": 472218, "end": 472334, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/__init__.pyo", "start": 472334, "end": 477240, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/compat.pyo", "start": 477240, "end": 480618, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/time.pyo", "start": 480618, "end": 480807, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/version.pyo", "start": 480807, "end": 481303, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/sysfont.pyo", "start": 481303, "end": 501409, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/sprite.pyo", "start": 501409, "end": 529630, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/threads/__init__.pyo", "start": 529630, "end": 535947, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/threads/Py25Queue.pyo", "start": 535947, "end": 541498, "audio": 0}, {"filename": "/_markupbase/__init__.pyo", "start": 541498, "end": 542021, "audio": 0}, {"filename": "/future-0.18.2.dist-info/top_level.txt", "start": 542021, "end": 542169, "audio": 0}, {"filename": "/future-0.18.2.dist-info/entry_points.txt", "start": 542169, "end": 542258, "audio": 0}, {"filename": "/future-0.18.2.dist-info/DESCRIPTION.rst", "start": 542258, "end": 544921, "audio": 0}, {"filename": "/future-0.18.2.dist-info/METADATA", "start": 544921, "end": 548623, "audio": 0}, {"filename": "/future-0.18.2.dist-info/metadata.json", "start": 548623, "end": 550043, "audio": 0}, {"filename": "/future-0.18.2.dist-info/RECORD", "start": 550043, "end": 580189, "audio": 0}, {"filename": "/future-0.18.2.dist-info/LICENSE.txt", "start": 580189, "end": 581272, "audio": 0}, {"filename": "/future-0.18.2.dist-info/INSTALLER", "start": 581272, "end": 581276, "audio": 0}, {"filename": "/future-0.18.2.dist-info/WHEEL", "start": 581276, "end": 581369, "audio": 0}, {"filename": "/future/__init__.pyo", "start": 581369, "end": 581832, "audio": 0}, {"filename": "/future/builtins/__init__.pyo", "start": 581832, "end": 583075, "audio": 0}, {"filename": "/future/builtins/newsuper.pyo", "start": 583075, "end": 584878, "audio": 0}, {"filename": "/future/builtins/newnext.pyo", "start": 584878, "end": 585566, "audio": 0}, {"filename": "/future/builtins/newround.pyo", "start": 585566, "end": 587471, "audio": 0}, {"filename": "/future/builtins/iterators.pyo", "start": 587471, "end": 588096, "audio": 0}, {"filename": "/future/builtins/new_min_max.pyo", "start": 588096, "end": 589738, "audio": 0}, {"filename": "/future/builtins/misc.pyo", "start": 589738, "end": 591500, "audio": 0}, {"filename": "/future/builtins/disabled.pyo", "start": 591500, "end": 592525, "audio": 0}, {"filename": "/future/backports/_markupbase.pyo", "start": 592525, "end": 601137, "audio": 0}, {"filename": "/future/backports/__init__.pyo", "start": 601137, "end": 601782, "audio": 0}, {"filename": "/future/backports/socketserver.pyo", "start": 601782, "end": 615420, "audio": 0}, {"filename": "/future/backports/socket.pyo", "start": 615420, "end": 626039, "audio": 0}, {"filename": "/future/backports/misc.pyo", "start": 626039, "end": 647877, "audio": 0}, {"filename": "/future/backports/datetime.pyo", "start": 647877, "end": 698357, "audio": 0}, {"filename": "/future/backports/total_ordering.pyo", "start": 698357, "end": 700983, "audio": 0}, {"filename": "/future/backports/http/cookies.pyo", "start": 700983, "end": 716208, "audio": 0}, {"filename": "/future/backports/http/client.pyo", "start": 716208, "end": 745714, "audio": 0}, {"filename": "/future/backports/http/__init__.pyo", "start": 745714, "end": 745836, "audio": 0}, {"filename": "/future/backports/http/cookiejar.pyo", "start": 745836, "end": 794042, "audio": 0}, {"filename": "/future/backports/http/server.pyo", "start": 794042, "end": 824233, "audio": 0}, {"filename": "/future/backports/xmlrpc/client.pyo", "start": 824233, "end": 858915, "audio": 0}, {"filename": "/future/backports/xmlrpc/__init__.pyo", "start": 858915, "end": 859039, "audio": 0}, {"filename": "/future/backports/xmlrpc/server.pyo", "start": 859039, "end": 880889, "audio": 0}, {"filename": "/future/backports/html/__init__.pyo", "start": 880889, "end": 881539, "audio": 0}, {"filename": "/future/backports/html/entities.pyo", "start": 881539, "end": 946823, "audio": 0}, {"filename": "/future/backports/html/parser.pyo", "start": 946823, "end": 960590, "audio": 0}, {"filename": "/future/backports/email/base64mime.pyo", "start": 960590, "end": 962787, "audio": 0}, {"filename": "/future/backports/email/_encoded_words.pyo", "start": 962787, "end": 968341, "audio": 0}, {"filename": "/future/backports/email/feedparser.pyo", "start": 968341, "end": 979540, "audio": 0}, {"filename": "/future/backports/email/__init__.pyo", "start": 979540, "end": 981323, "audio": 0}, {"filename": "/future/backports/email/utils.pyo", "start": 981323, "end": 990910, "audio": 0}, {"filename": "/future/backports/email/_header_value_parser.pyo", "start": 990910, "end": 1072000, "audio": 0}, {"filename": "/future/backports/email/encoders.pyo", "start": 1072000, "end": 1074410, "audio": 0}, {"filename": "/future/backports/email/headerregistry.pyo", "start": 1074410, "end": 1093591, "audio": 0}, {"filename": "/future/backports/email/errors.pyo", "start": 1093591, "end": 1099083, "audio": 0}, {"filename": "/future/backports/email/iterators.pyo", "start": 1099083, "end": 1101082, "audio": 0}, {"filename": "/future/backports/email/parser.pyo", "start": 1101082, "end": 1104778, "audio": 0}, {"filename": "/future/backports/email/_policybase.pyo", "start": 1104778, "end": 1112312, "audio": 0}, {"filename": "/future/backports/email/_parseaddr.pyo", "start": 1112312, "end": 1124544, "audio": 0}, {"filename": "/future/backports/email/message.pyo", "start": 1124544, "end": 1141886, "audio": 0}, {"filename": "/future/backports/email/policy.pyo", "start": 1141886, "end": 1145943, "audio": 0}, {"filename": "/future/backports/email/charset.pyo", "start": 1145943, "end": 1152946, "audio": 0}, {"filename": "/future/backports/email/quoprimime.pyo", "start": 1152946, "end": 1160074, "audio": 0}, {"filename": "/future/backports/email/generator.pyo", "start": 1160074, "end": 1171456, "audio": 0}, {"filename": "/future/backports/email/header.pyo", "start": 1171456, "end": 1185277, "audio": 0}, {"filename": "/future/backports/email/mime/base.pyo", "start": 1185277, "end": 1186163, "audio": 0}, {"filename": "/future/backports/email/mime/__init__.pyo", "start": 1186163, "end": 1186291, "audio": 0}, {"filename": "/future/backports/email/mime/image.pyo", "start": 1186291, "end": 1187445, "audio": 0}, {"filename": "/future/backports/email/mime/text.pyo", "start": 1187445, "end": 1188558, "audio": 0}, {"filename": "/future/backports/email/mime/audio.pyo", "start": 1188558, "end": 1190199, "audio": 0}, {"filename": "/future/backports/email/mime/application.pyo", "start": 1190199, "end": 1191317, "audio": 0}, {"filename": "/future/backports/email/mime/multipart.pyo", "start": 1191317, "end": 1192316, "audio": 0}, {"filename": "/future/backports/email/mime/nonmultipart.pyo", "start": 1192316, "end": 1193258, "audio": 0}, {"filename": "/future/backports/email/mime/message.pyo", "start": 1193258, "end": 1194364, "audio": 0}, {"filename": "/future/backports/test/keycert.passwd.pem", "start": 1194364, "end": 1196194, "audio": 0}, {"filename": "/future/backports/test/nullbytecert.pem", "start": 1196194, "end": 1201629, "audio": 0}, {"filename": "/future/backports/test/__init__.pyo", "start": 1201629, "end": 1201753, "audio": 0}, {"filename": "/future/backports/test/ssl_key.pem", "start": 1201753, "end": 1202669, "audio": 0}, {"filename": "/future/backports/test/nokia.pem", "start": 1202669, "end": 1204592, "audio": 0}, {"filename": "/future/backports/test/keycert2.pem", "start": 1204592, "end": 1206387, "audio": 0}, {"filename": "/future/backports/test/badcert.pem", "start": 1206387, "end": 1208315, "audio": 0}, {"filename": "/future/backports/test/ssl_cert.pem", "start": 1208315, "end": 1209182, "audio": 0}, {"filename": "/future/backports/test/badkey.pem", "start": 1209182, "end": 1211344, "audio": 0}, {"filename": "/future/backports/test/dh512.pem", "start": 1211344, "end": 1211746, "audio": 0}, {"filename": "/future/backports/test/support.pyo", "start": 1211746, "end": 1260983, "audio": 0}, {"filename": "/future/backports/test/ssl_servers.pyo", "start": 1260983, "end": 1269097, "audio": 0}, {"filename": "/future/backports/test/sha256.pem", "start": 1269097, "end": 1277441, "audio": 0}, {"filename": "/future/backports/test/ssl_key.passwd.pem", "start": 1277441, "end": 1278404, "audio": 0}, {"filename": "/future/backports/test/nullcert.pem", "start": 1278404, "end": 1278404, "audio": 0}, {"filename": "/future/backports/test/pystone.pyo", "start": 1278404, "end": 1285141, "audio": 0}, {"filename": "/future/backports/test/keycert.pem", "start": 1285141, "end": 1286924, "audio": 0}, {"filename": "/future/backports/test/https_svn_python_org_root.pem", "start": 1286924, "end": 1289493, "audio": 0}, {"filename": "/future/backports/urllib/__init__.pyo", "start": 1289493, "end": 1289617, "audio": 0}, {"filename": "/future/backports/urllib/response.pyo", "start": 1289617, "end": 1293662, "audio": 0}, {"filename": "/future/backports/urllib/robotparser.pyo", "start": 1293662, "end": 1299792, "audio": 0}, {"filename": "/future/backports/urllib/parse.pyo", "start": 1299792, "end": 1325157, "audio": 0}, {"filename": "/future/backports/urllib/request.pyo", "start": 1325157, "end": 1397090, "audio": 0}, {"filename": "/future/backports/urllib/error.pyo", "start": 1397090, "end": 1399543, "audio": 0}, {"filename": "/future/standard_library/__init__.pyo", "start": 1399543, "end": 1413363, "audio": 0}, {"filename": "/future/tests/base.pyo", "start": 1413363, "end": 1426272, "audio": 0}, {"filename": "/future/tests/__init__.pyo", "start": 1426272, "end": 1426385, "audio": 0}, {"filename": "/future/moves/itertools.pyo", "start": 1426385, "end": 1426728, "audio": 0}, {"filename": "/future/moves/_markupbase.pyo", "start": 1426728, "end": 1427079, "audio": 0}, {"filename": "/future/moves/__init__.pyo", "start": 1427079, "end": 1427459, "audio": 0}, {"filename": "/future/moves/copyreg.pyo", "start": 1427459, "end": 1427874, "audio": 0}, {"filename": "/future/moves/socketserver.pyo", "start": 1427874, "end": 1428229, "audio": 0}, {"filename": "/future/moves/configparser.pyo", "start": 1428229, "end": 1428545, "audio": 0}, {"filename": "/future/moves/subprocess.pyo", "start": 1428545, "end": 1429055, "audio": 0}, {"filename": "/future/moves/reprlib.pyo", "start": 1429055, "end": 1429392, "audio": 0}, {"filename": "/future/moves/collections.pyo", "start": 1429392, "end": 1430116, "audio": 0}, {"filename": "/future/moves/builtins.pyo", "start": 1430116, "end": 1430494, "audio": 0}, {"filename": "/future/moves/winreg.pyo", "start": 1430494, "end": 1430832, "audio": 0}, {"filename": "/future/moves/_thread.pyo", "start": 1430832, "end": 1431171, "audio": 0}, {"filename": "/future/moves/queue.pyo", "start": 1431171, "end": 1431505, "audio": 0}, {"filename": "/future/moves/sys.pyo", "start": 1431505, "end": 1431829, "audio": 0}, {"filename": "/future/moves/pickle.pyo", "start": 1431829, "end": 1432223, "audio": 0}, {"filename": "/future/moves/_dummy_thread.pyo", "start": 1432223, "end": 1432580, "audio": 0}, {"filename": "/future/moves/dbm/__init__.pyo", "start": 1432580, "end": 1433092, "audio": 0}, {"filename": "/future/moves/dbm/ndbm.pyo", "start": 1433092, "end": 1433430, "audio": 0}, {"filename": "/future/moves/dbm/gnu.pyo", "start": 1433430, "end": 1433767, "audio": 0}, {"filename": "/future/moves/dbm/dumb.pyo", "start": 1433767, "end": 1434109, "audio": 0}, {"filename": "/future/moves/http/cookies.pyo", "start": 1434109, "end": 1434497, "audio": 0}, {"filename": "/future/moves/http/client.pyo", "start": 1434497, "end": 1434826, "audio": 0}, {"filename": "/future/moves/http/__init__.pyo", "start": 1434826, "end": 1435050, "audio": 0}, {"filename": "/future/moves/http/cookiejar.pyo", "start": 1435050, "end": 1435406, "audio": 0}, {"filename": "/future/moves/http/server.pyo", "start": 1435406, "end": 1436006, "audio": 0}, {"filename": "/future/moves/xmlrpc/client.pyo", "start": 1436006, "end": 1436321, "audio": 0}, {"filename": "/future/moves/xmlrpc/__init__.pyo", "start": 1436321, "end": 1436441, "audio": 0}, {"filename": "/future/moves/xmlrpc/server.pyo", "start": 1436441, "end": 1436756, "audio": 0}, {"filename": "/future/moves/html/__init__.pyo", "start": 1436756, "end": 1437451, "audio": 0}, {"filename": "/future/moves/html/entities.pyo", "start": 1437451, "end": 1437810, "audio": 0}, {"filename": "/future/moves/html/parser.pyo", "start": 1437810, "end": 1438161, "audio": 0}, {"filename": "/future/moves/test/__init__.pyo", "start": 1438161, "end": 1438448, "audio": 0}, {"filename": "/future/moves/test/support.pyo", "start": 1438448, "end": 1438900, "audio": 0}, {"filename": "/future/moves/urllib/__init__.pyo", "start": 1438900, "end": 1439189, "audio": 0}, {"filename": "/future/moves/urllib/response.pyo", "start": 1439189, "end": 1439685, "audio": 0}, {"filename": "/future/moves/urllib/robotparser.pyo", "start": 1439685, "end": 1440051, "audio": 0}, {"filename": "/future/moves/urllib/parse.pyo", "start": 1440051, "end": 1440914, "audio": 0}, {"filename": "/future/moves/urllib/request.pyo", "start": 1440914, "end": 1442147, "audio": 0}, {"filename": "/future/moves/urllib/error.pyo", "start": 1442147, "end": 1442707, "audio": 0}, {"filename": "/future/moves/tkinter/commondialog.pyo", "start": 1442707, "end": 1443185, "audio": 0}, {"filename": "/future/moves/tkinter/colorchooser.pyo", "start": 1443185, "end": 1443663, "audio": 0}, {"filename": "/future/moves/tkinter/messagebox.pyo", "start": 1443663, "end": 1444133, "audio": 0}, {"filename": "/future/moves/tkinter/__init__.pyo", "start": 1444133, "end": 1444911, "audio": 0}, {"filename": "/future/moves/tkinter/scrolledtext.pyo", "start": 1444911, "end": 1445385, "audio": 0}, {"filename": "/future/moves/tkinter/constants.pyo", "start": 1445385, "end": 1445851, "audio": 0}, {"filename": "/future/moves/tkinter/dialog.pyo", "start": 1445851, "end": 1446301, "audio": 0}, {"filename": "/future/moves/tkinter/ttk.pyo", "start": 1446301, "end": 1446739, "audio": 0}, {"filename": "/future/moves/tkinter/filedialog.pyo", "start": 1446739, "end": 1447205, "audio": 0}, {"filename": "/future/moves/tkinter/tix.pyo", "start": 1447205, "end": 1447643, "audio": 0}, {"filename": "/future/moves/tkinter/font.pyo", "start": 1447643, "end": 1448089, "audio": 0}, {"filename": "/future/moves/tkinter/simpledialog.pyo", "start": 1448089, "end": 1448563, "audio": 0}, {"filename": "/future/moves/tkinter/dnd.pyo", "start": 1448563, "end": 1449005, "audio": 0}, {"filename": "/future/types/__init__.pyo", "start": 1449005, "end": 1451602, "audio": 0}, {"filename": "/future/types/newobject.pyo", "start": 1451602, "end": 1453124, "audio": 0}, {"filename": "/future/types/newrange.pyo", "start": 1453124, "end": 1458376, "audio": 0}, {"filename": "/future/types/newopen.pyo", "start": 1458376, "end": 1459758, "audio": 0}, {"filename": "/future/types/newmemoryview.pyo", "start": 1459758, "end": 1460626, "audio": 0}, {"filename": "/future/types/newlist.pyo", "start": 1460626, "end": 1463146, "audio": 0}, {"filename": "/future/types/newdict.pyo", "start": 1463146, "end": 1465488, "audio": 0}, {"filename": "/future/types/newint.pyo", "start": 1465488, "end": 1476803, "audio": 0}, {"filename": "/future/types/newbytes.pyo", "start": 1476803, "end": 1489600, "audio": 0}, {"filename": "/future/types/newstr.pyo", "start": 1489600, "end": 1501272, "audio": 0}, {"filename": "/future/utils/surrogateescape.pyo", "start": 1501272, "end": 1505137, "audio": 0}, {"filename": "/future/utils/__init__.pyo", "start": 1505137, "end": 1520444, "audio": 0}, {"filename": "/copyreg/__init__.pyo", "start": 1520444, "end": 1520922, "audio": 0}, {"filename": "/winreg/__init__.pyo", "start": 1520922, "end": 1521437, "audio": 0}, {"filename": "/typing-3.10.0.0.dist-info/top_level.txt", "start": 1521437, "end": 1521444, "audio": 0}, {"filename": "/typing-3.10.0.0.dist-info/METADATA", "start": 1521444, "end": 1523709, "audio": 0}, {"filename": "/typing-3.10.0.0.dist-info/RECORD", "start": 1523709, "end": 1524282, "audio": 0}, {"filename": "/typing-3.10.0.0.dist-info/INSTALLER", "start": 1524282, "end": 1524286, "audio": 0}, {"filename": "/typing-3.10.0.0.dist-info/LICENSE", "start": 1524286, "end": 1537041, "audio": 0}, {"filename": "/typing-3.10.0.0.dist-info/WHEEL", "start": 1537041, "end": 1537133, "audio": 0}, {"filename": "/queue/__init__.pyo", "start": 1537133, "end": 1537645, "audio": 0}, {"filename": "/tkinter/commondialog.pyo", "start": 1537645, "end": 1538110, "audio": 0}, {"filename": "/tkinter/colorchooser.pyo", "start": 1538110, "end": 1538575, "audio": 0}, {"filename": "/tkinter/messagebox.pyo", "start": 1538575, "end": 1539032, "audio": 0}, {"filename": "/tkinter/__init__.pyo", "start": 1539032, "end": 1539922, "audio": 0}, {"filename": "/tkinter/scrolledtext.pyo", "start": 1539922, "end": 1540383, "audio": 0}, {"filename": "/tkinter/constants.pyo", "start": 1540383, "end": 1540836, "audio": 0}, {"filename": "/tkinter/dialog.pyo", "start": 1540836, "end": 1541273, "audio": 0}, {"filename": "/tkinter/ttk.pyo", "start": 1541273, "end": 1541698, "audio": 0}, {"filename": "/tkinter/filedialog.pyo", "start": 1541698, "end": 1542306, "audio": 0}, {"filename": "/tkinter/tix.pyo", "start": 1542306, "end": 1542731, "audio": 0}, {"filename": "/tkinter/font.pyo", "start": 1542731, "end": 1543164, "audio": 0}, {"filename": "/tkinter/simpledialog.pyo", "start": 1543164, "end": 1543625, "audio": 0}, {"filename": "/tkinter/dnd.pyo", "start": 1543625, "end": 1544054, "audio": 0}, {"filename": "/reprlib/__init__.pyo", "start": 1544054, "end": 1544528, "audio": 0}], "remote_package_size": 1544528, "package_uuid": "7c4d4a8f-f012-43ae-a54c-6ea998701bd6"});
  
  })();
  