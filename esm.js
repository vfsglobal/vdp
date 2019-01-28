var require = require('esm')(module),
    nodeFileName = './' + process.argv[2];

process.argv.splice(1, 1);

require(nodeFileName);