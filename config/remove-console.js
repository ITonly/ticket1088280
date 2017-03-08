var UglifyJS = require("uglify-js");
var consoleRegex = /console.(log|debug|info|warn|error|assert|dir|dirxml|trace|group|groupEnd|time|timeEnd|profile|profileEnd|count)\((.*)\);/g;

module.exports = function (source, sourcemap) {
    // Not cacheable during unit tests;
    this.cacheable && this.cacheable();
    var newSource
    if (source) {
        var replace = false;
        if (process.env.ENV_NODE === 'production') {
            newSource = source.replace(consoleRegex, function (match, url) {
                return '';
            });
        } else {
            newSource = source;
        }
    }
    // Support for tests
    if (this.callback) {
        this.callback(null, newSource, sourcemap)
    } else {
        return newSource;
    }
};