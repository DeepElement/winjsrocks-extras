import IndexDBStorageProvider from "./provider/indexdb-storage/index"
import PlatformFeaturePlugin from "./plugin/platform-feature/index";

export default {
  Plugin: {
    PlatformFeature: PlatformFeaturePlugin
  },
  Provider: {
    IndexDBStorage: IndexDBStorageProvider
  },
  Service: {
    
  }
}
