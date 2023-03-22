// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);


const babelTransformerPath = require.resolve('unonative/transformer');
config.transformer.babelTransformerPath = babelTransformerPath;
module.exports = config;
