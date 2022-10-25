module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '^~/(.+)': './src/\\1',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
