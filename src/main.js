import IndexDBStorageProvider from "./provider/indexdb-storage"
import PlatformFeaturePlugin from "./plugin/platform-feature";

export default {
  Plugin: {
    PlatformFeature: PlatformFeaturePlugin
  },
  Provider: {
    IndexDBStorage: IndexDBStorageProvider
  }
}
