const fs = require('fs');
const uglify = require('uglify-es');

const code = {};

function readFiles(dirname) {
  fs.readdir(dirname, (err, filenames) => {
    if (err) {
      console.log(err);
      return;
    }

    filenames.forEach((filename) => {
      const data = fs.readFileSync(dirname + filename, 'utf8');
      code[filename] = data;
    });

    const minified = uglify.minify(code);

    fs.writeFile('./public/scripts.js', minified.code, (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
}

function start() {
  readFiles('./assets/scripts/');
}

module.exports = {
  start: start
};

