const extractHeaders = require('./extractHeaders');

function toSheet(data) {
  const headers = extractHeaders(data);
  const values = data.map(item => headers.map(key => item[key]));

  return [headers, ...values];
}

module.exports = toSheet;
