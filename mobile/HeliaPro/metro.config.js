const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const config = mergeConfig(defaultConfig, {
  watchFolders: [
    // Also watch the shared 'common' folder two levels up
    path.resolve(__dirname, '../../common')
  ],
  resolver: {
    // Map '@common' and fallback all others to root node_modules
    extraNodeModules: new Proxy(
      { '@common': path.resolve(__dirname, '../../common') },
      {
        get: (target, name) =>
          name in target
            ? target[name]
            : path.resolve(__dirname, 'node_modules', name.toString()),
      }
    ),
    assetExts: defaultConfig.resolver.assetExts,
    sourceExts: [...defaultConfig.resolver.sourceExts, 'jsx', 'js', 'ts', 'tsx'],
  },
    // Keep default asset and source extensions
    assetExts: defaultConfig.resolver.assetExts,
    sourceExts: [...defaultConfig.resolver.sourceExts, 'jsx', 'js', 'ts', 'tsx'],
  },
);

module.exports = config;
