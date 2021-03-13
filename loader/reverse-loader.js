module.exports = function(src) {
  if (src) {
    src = src
      .split("")
      .reverse()
      .join("");
  }
  return src;
};
