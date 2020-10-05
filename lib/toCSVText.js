const toSheet = require('./toSheet');

function toCSVText(data, separator = ',') {
  const sheet = toSheet(data);
  return sheet.map(row => row.join(separator)).join('\n');
}

module.exports = toCSVText;
