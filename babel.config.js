const unocssBabel = require('unonative/babel');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      unocssBabel.default,
      // 'jsx-classlist',
      // require.resolve('expo-router/babel'),
    ],
  };
};
