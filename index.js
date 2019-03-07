exports.find = function (keywords, category, callback) {
  require('./functions/find')(keywords, category, callback)
};

exports.droplist = function (season, callback) {
  require('./functions/droplist')(season, callback)
};

exports.styles = function (id, callback) {
  require('./functions/styles')(id, callback)
};

exports.monitor = function (int, func, callback) {
  require('./functions/monitor')(int, func, callback)
}
