module.exports = function (bundler) {
  bundler.addAssetType('xml', require.resolve('./BrowserconfigAsset'));
};
