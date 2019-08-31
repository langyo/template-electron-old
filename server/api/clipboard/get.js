const clipboard = require('electron').clipboard;

module.exports = server => server.register('api.clipboard.get', (obj, callback) => callback({
  content: clipboard.readText()
}));