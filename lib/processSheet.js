function processSheet(sheet) {
  const [headers, ...rows] = sheet;
  return rows.map((row) =>
    row.reduce((previousValue, value, index) => {
      const key = headers[index];
      return { ...previousValue, [key]: value };
    }, {}),
  );
}

module.exports = processSheet;
