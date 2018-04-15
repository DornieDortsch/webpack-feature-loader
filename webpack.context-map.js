const fs = require('fs');
const path = require('path');

module.exports = createContextMap

function createContextMap(sourceDir) {
  const contextMap = 
    readDirRecursive(sourceDir)
    .filter(file => file.endsWith('.feature.js'))
    .reduce(addFileToContextMap(sourceDir), {})

    return (fs, callback) => {
        callback(null, contextMap)
    }
}

function readDirRecursive(dir) {
    return fs.statSync(dir).isDirectory()
        ? Array.prototype.concat(...fs.readdirSync(dir).map(f => readDirRecursive(path.join(dir, f))))
        : dir;
}

function addFileToContextMap(rootDir) {
    return function(contextMap, file) {
        contextMap['./' + path.basename(file, '.feature.js') + '.js'] = ('./' + file).replace(rootDir, '.')
        return contextMap
    }
}