# require-package-name

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Gets the base package name for a module path in a require statement. Assumes the path [is not relative](https://www.npmjs.com/package/relative-require-regex).

```js
var base = require('require-package-name')

base('events')                  => 'events'
base('events/')                 => 'events'
base('events/index.js')         => 'events'
base('@username/button/a.js')   => 'button'
```

## Usage

[![NPM](https://nodei.co/npm/require-package-name.png)](https://www.npmjs.com/package/require-package-name)

#### `base = packageName(str)`

Gets the `base` module name for a require string like `'url'` or `'events/'`.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/require-package-name/blob/master/LICENSE.md) for details.
