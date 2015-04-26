var name = require('./')
var test = require('tape')

test('gets the package name for a require statement', function(t) {
  t.equal(name(''), null)
  t.equal(name('tape/index.js'), 'tape')
  t.equal(name('tape/'), 'tape')
  t.equal(name('tape'), 'tape')
  t.equal(name('tape/foo/bar/index.js'), 'tape')
  t.equal(name('tape/foo/bar/index'), 'tape')
  t.equal(name('tape/foo/bar/'), 'tape')
  t.equal(name('tape/foo/bar'), 'tape')
  t.equal(name('tape///foo/bar'), 'tape', 'handles extra slashes')

  //scopes
  t.equal(name('@user/home'), 'home')
  t.equal(name('@user/home/'), 'home')
  t.equal(name('@user/home/foo.js'), 'home')
  t.equal(name('@user//foobar'), 'foobar')
  t.equal(name('@user'), null)
  t.equal(name('@user/'), null)
  t.equal(name('@user//'), null)
  t.end()
})