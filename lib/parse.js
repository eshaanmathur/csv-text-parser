const processSheet = require('./processSheet');

function parse(text, separator = ',') {
  const sheet = text
    .trim()
    .split('\n')
    .map((row) =>
      row
        .trim()
        .split(separator)
        .map((item) => item.trim()),
    );
  return processSheet(sheet);
}

module.exports = parse;
