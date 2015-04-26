var scopePattern = /^(?:@[^/]+[/]+)([^/]+)[/]?/
var basePattern = /^([^/]+)[/]?/

module.exports = function(str) {
  var pattern = /^@/.test(str) ? scopePattern : basePattern
  var match = pattern.exec(str)
  if (!match)
    return null
  return match[1] || null
}