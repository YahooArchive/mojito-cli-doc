var test = require('tap').test,
    resolve = require('path').resolve,
    rimraf = require('rimraf'),
    fn = require('../docs').makeDocs;


function getEnv(args, opts) {
    var dir = resolve(__dirname, 'artifacts');
    return {
        cwd: __dirname,
        args: args || [],
        opts: opts || {exclude:[], directory: dir, quiet: true},
        app: {},
        mojito: {}
    };
}

test('garbage in, garbage out', function(t) {
    var env = getEnv();

    function cb(err, msg) {
        t.ok(!err);
        t.equal(msg.slice(0, 4), 'Done');

        // cleanup
        rimraf(env.opts.directory, function(err) {
            t.ok(!err)
        });
    }

    t.plan(3);
    fn('nonsense', __dirname, env, cb);
});
