/**
 * Patches the hardcoded /keystone path and adds a prefix (see https://github.com/keystonejs/keystone/issues/442)
 * (!) Performance penalty for large templates since the entire body is str replaced on.
 *
 * Example:
 *
 * server.use('*keystone*', patchKeystone(prefix, keystone)); //process.env.PREFIX = /my/subdirectory
 *
 * @param prefix the subdirectory the website is hosted in (e.g. if its www.demo.com/a/b then then prefix is /a/b
 * @param keystone your keystone instance
 * @returns {Function} a middleware function
 */
module.exports = function(prefix, keystone) {
    var regex = /\/keystone\//g;
    var rootHref = "a href=\"" + prefix + "\"";
    var keystoneHref = "a href=\"" + prefix + "keystone\"";
    var replaceKeystoneUrl = function(string) {
        return string.replace(regex, prefix + "keystone/");
    };

    keystone.set('signin url', prefix + 'keystone/signin');
    keystone.set('signout url', prefix + 'keystone/signout');
    keystone.set('signin redirect', prefix + 'keystone/');
    keystone.set('signout redirect', prefix);

    return function(req, res, next) {
        var _send = res.send;
        res.send = function( body ) {
            _send.call( this, replaceKeystoneUrl(body
                    .replace("a href=\"/\"", rootHref)
                    .replace("a href=\"/keystone\"", keystoneHref)
            ));
        };

        var _redirect = res.redirect;
        res.redirect = function(url) {
            if (url === '/')
                _redirect.call( this, prefix);
            else
                _redirect.call( this, replaceKeystoneUrl(url));
        };

        next();
    }
};