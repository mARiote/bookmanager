var path = require('path');

var rootPath = path.normalize(__dirname + '/..');

module.exports = {
	development: {
		root: rootPath
	},
	test: {
		root: rootPath
	},
	production: {
		root: rootPath
	}
};
