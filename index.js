require('shelljs/global');
var path = require('path');

var sevenZipPath = path.join(__dirname, 'bin', 'win32', '7z');

var sevenZip = {};
module['exports'] = sevenZip;

function append() {
	var outFile = arguments[0];
	var infiles = [];
	for(var i = 1; i < arguments.length; i++) {
		infiles.push(arguments[i]);
	}

	var cmd = sevenZipPath + " a " + outFile + " " + infiles.join(" ");
	return exec(cmd);
}

sevenZip.append = append;