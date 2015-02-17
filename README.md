# KeystoneJS Admin Routes Workaround

Replaces the hardcoded admin route /keystone with a route of your choosing (uses string replaces since they are hard coded in keystone).

## Usage

    npm install keystone-admin-routes --save

*(!)* There is a performance penalty for large templates since the entire body is str replaced on.

    var patchKeystone = require('keystone-admin-routes');
    server.use('*keystone*', patchKeystone(prefix, keystone)); //process.env.PREFIX = /my/subdirectory

See [keystonejs 627](https://github.com/keystonejs/keystone/issues/627), [keystonejs 442](https://github.com/keystonejs/keystone/issues/442)

## License

(The MIT License)

Copyright (c) 2015 Frederik Eichler

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
