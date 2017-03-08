var path = require('path');
var fs = require('fs');
var sass = require('node-sass');
var glob = require('glob');

function compileScss() {
    var deviceExclude = process.env.OS === 'ios' ? 'android' : 'ios';
    var projectPath = path.resolve('.');
    var sassFilesPath = path.join(projectPath, 'app/**/*.scss');
    var sassImportPaths = [
        path.join(projectPath, 'app/'),
        path.join(projectPath, 'node_modules/')
    ];

    deleteCss(projectPath);

    var sassFiles = glob.sync(sassFilesPath, {
        follow: true
    }).filter(function (filePath) {
        var path = filePath;
        var parts = path.split('/');
        var filename = parts[parts.length - 1];

        return path.indexOf("App_Resources") === -1 && filename.indexOf("_") !== 0 &&
            filename.indexOf(deviceExclude) === -1;
    });

    if (sassFiles.length === 0) {
        return;
    } else {
        for (var i = 0; i < sassFiles.length; i++) {
            parseSass(sassFiles[i], sassImportPaths);
        }
    }
}

function parseSass(filePath, importPaths) {
    var device = process.env.OS;
    var sassFileContent = fs.readFileSync(filePath, {
        encoding: 'utf8'
    });
    var cssFilePath = filePath.replace('.scss', '.css').replace('.' + device, '');

    if (sassFileContent.trim().length === 0) {
        return;
    }
    sass.render({
        data: sassFileContent,
        includePaths: importPaths,
        outFile: cssFilePath,
        outputStyle: 'compressed'
    }, function (e, output) {
        if (e) {
            console.log(e);
        }

        if (output && output.css) {
            output = output.css;
        } else {
            output = '';
        }

        fs.writeFileSync(cssFilePath, output, 'utf8');
    });
}

function deleteCss(projectPath) {
    var cssFilesPath = path.join(projectPath, 'app/**/*.css');

    var cssFiles = glob.sync(cssFilesPath, {
        follow: true
    }).filter(function (filePath) {
        var path = filePath;
        var parts = path.split('/');
        var filename = parts[parts.length - 1];

        return path.indexOf("App_Resources") === -1 && filename.indexOf("_") !== 0;
    });

    for (var i = 0; i < cssFiles.length; i++) {
        fs.unlinkSync(cssFiles[i]);
    }
}

compileScss();