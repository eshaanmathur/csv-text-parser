function extractHeaders(data) {
  const keys = data.reduce(
    (previousKeys, item) => [...previousKeys, ...Object.keys(item)],
    []
  );
  return keys.reduce(
    (previousKeys, key) =>
      previousKeys.includes(key) ? previousKeys : [...previousKeys, key],
    []
  );
}

module.exports = extractHeaders;
