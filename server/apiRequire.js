let api = [];

const dfs = (filePath) => require('fs').readdir(filePath, (err, files) => {
  if (err) {
    console.warn(err);
  } else {
    files.forEach((fileName) => {
      let fileDir = require('path').join(filePath, fileName);
      require('fs').stat(fileDir, function (err, stats) {
        if (err) {
          console.warn('获取文件stats失败');
        } else {
          if (stats.isFile()) {
            api.push(require(fileDir));
          }
          if (stats.isDirectory()) {
            dfs(fileDir);
          }
        }
      });
    });
  }
});

dfs(require('path').join(__dirname, "api"));

module.exports = server => api.forEach(func => func(server));