# parcel-plugin-browserconfig

[![Build Status](https://florianrappl.visualstudio.com/parcel-plugin-browserconfig/_apis/build/status/FlorianRappl.parcel-plugin-browserconfig?branchName=master)](https://florianrappl.visualstudio.com/parcel-plugin-browserconfig/_build/latest?definitionId=11&branchName=master)
[![npm](https://img.shields.io/npm/v/parcel-plugin-browserconfig.svg)](https://www.npmjs.com/package/parcel-plugin-browserconfig)
[![node](https://img.shields.io/node/v/parcel-plugin-browserconfig.svg)](https://www.npmjs.com/package/parcel-plugin-browserconfig)
[![GitHub tag](https://img.shields.io/github/tag/FlorianRappl/parcel-plugin-browserconfig.svg)](https://github.com/FlorianRappl/parcel-plugin-browserconfig/releases)
[![GitHub issues](https://img.shields.io/github/issues/FlorianRappl/parcel-plugin-browserconfig.svg)](https://github.com/FlorianRappl/parcel-plugin-browserconfig/issues)

A simple plugin for Parcel to traverse a browserconfig.xml file.

## Usage

Just install the plugin. Make sure that your HTML file references the browserconfig.xml, e.g.,

```html
<meta name="msapplication-config" content="browserconfig.xml" />
```

The file will be minifed and all sources will be correctly marked as dependencies.

## Changelog

This project adheres to [semantic versioning](https://semver.org).

You can find the changelog in the [CHANGELOG.md](CHANGELOG.md) file.

## License

gqlx-js is released using the MIT license. For more information see the [LICENSE file](LICENSE).
