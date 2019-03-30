function trimNewlines(str) {
  // remove leading/trailing newline
  return str.replace(/^\s*\n/g, "").replace(/\n\s*$/g, "");
}

function stripAllLineWhitespace(str) {
  return str.replace(/^\s+/gm, "");
}

function stripFirstLineWhitespace(str) {
  const firstLineWhitespace = /\s*/.exec(trimNewlines(str))[0];
  const firstLineWhitespaceRegex = new RegExp("^" + firstLineWhitespace, "gm");
  str = str.replace(firstLineWhitespaceRegex, "");
  return trimNewlines(str);
}

export {
  trimNewlines,
  stripAllLineWhitespace,
  stripFirstLineWhitespace,
};
