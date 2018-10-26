const { Asset } = require('parcel-bundler');
const { parseString, Builder } = require('xml2js');

class BrowserconfigAsset extends Asset {
  parse(code) {
    const options = {
      trim: true,
      attrValueProcessors: [(value, name) => {
        if (name === 'src') {
          return this.addURLDependency(value);
        }
        return value;
      }],
    };
    return new Promise((resolve, reject) => {
      parseString(code, options, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result)
        }
      });
    });
  }

  generate() {
    const builder = new Builder({
      renderOpts: {
        pretty: false,
      },
    });
    return builder.buildObject(this.ast);
  }
}

module.exports = BrowserconfigAsset;
