// register babeel to transpile before our tests run
require('babel-register')();

// disable webpack features that Mocha doesn't understand 
require.extensions['.css'] = function() {}; // treat it as an empty function