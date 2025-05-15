module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          // two levels up from HeliaPro
          '@common': '../../common',
        },
        extensions: ['.js','.jsx','.ts','.tsx','.json'],
      },
    ],
    'react-native-reanimated/plugin', // 👈 must be last
  ],
};
