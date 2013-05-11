/*
 * Copyright (c) 2011-2013, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
'use strict';

var EOL = require('os').EOL,
    resolve = require('path').resolve,
    mkdirp = require('mkdirp').sync,
    rimraf = require('rimraf').sync,

    util = require('./lib/utils'),
    yuidoc = require('yuidocjs'),

    excludes = require('./config').exclude,
    usage;


usage = [
    'Usage: mojito docs <type> [name] [--directory] [--server] [--port]',
    '  <type>  "mojito", "app" or "mojit", required',
    '  [name]  name for docs, required for type "mojit"',
    '',
    'Example Usage: mojito docs app foo',
    '  (creates directory "artifacts/docs/app/foo" containing that apps\'s docs)',
    '',
    'Example Usage: mojito docs mojit Bar --directory ~/mydocs',
    '  (creates directory ~/mydocs/mojits/Bar containing docs for mojit Bar)',
    '',
    'Options',
    '  --directory <path> Destination directory to save documentation in.',
    '  --server           Launch YUIDoc server instead of writing to disk.',
    '  --port <number>    Port number to start YUIDoc server on. Default is 3000.'
].join(EOL);


function makeDocs(name, source, env, cb) {
    var dest,
        json,
        builder,
        docopts;

    dest = resolve(env.opts.directory, name.replace(/[^\w]+/g, '_'));

    // require --remove option to rm -rf?
    rimraf(dest);
    mkdirp(dest);

    docopts = {
        paths: [ source ],
        outdir: dest,
        exclude: env.opts.exclude.join(),
        name: name,
        port: +env.opts.port || 3000,
        external: false,
        quiet: env.opts.quiet
    };

    if (env.opts.server || env.opts.port) {
        yuidoc.Server.start(docopts);

    } else {
        json = (new yuidoc.YUIDoc(docopts)).run();
        builder = new yuidoc.DocBuilder(docopts, json);
        builder.compile(function() {
            cb(null, 'Done, open ' + dest + '/index.html');
        });
    }
}

function makeAppDocs(name, env, cb) {
    var source = env.app && env.app.path;

    if (!util.exists(source)) {
        cb(util.errorWithUsage(5, 'Not an application directory'), usage);

    } else {
        makeDocs(name, source, env, cb);
    }
}

function makeMojitDocs(name, env, cb) {
    var source = util.findInPaths(['.', 'mojits'], name),
        err;

    if (!name) {
        err = 'Please specify mojit name';

    } else if (!source) {
        err = 'Cannot find mojit ' + name;
    }

    if (err) {
        cb(util.errorWithUsage(5, err, usage));

    } else {
        makeDocs(name, source, env, cb);
    }
}

function makeMojitoDocs(name, env, cb) {
    var source = env.mojito && env.mojito.path;

    if (!util.exists(source)) {
        cb(util.error(7, 'Cannot find the Mojito library'));

    } else {
        makeDocs(name, env.mojito.path, env, cb);
    }
}

function main(env, cb) {
    var type = (env.args.shift() || '').toLowerCase(),
        name = env.args.shift() || '',
        exclude = env.opts.exclude || [];

    // output dir
    if (!env.opts.directory) {
        env.opts.directory = resolve(env.cwd, 'artifacts', 'docs');
    }

    // directories to exclude
    env.opts.exclude = exclude.concat(excludes.always, excludes[type]);

    // exec
    switch (type) {
    case 'app':
        makeAppDocs(name, env, cb);
        break;

    case 'mojit':
        makeMojitDocs(name, env, cb);
        break;

    case 'mojito':
        makeMojitoDocs(name || 'Mojito', env, cb);
        break;

    default:
        cb(util.errorWithUsage(3, 'Unknown type', usage));
    }
}


module.exports = main;

module.exports.makeDocs = makeDocs;

module.exports.usage = usage;

module.exports.options = [
    {shortName: 'd', hasValue: true,  longName: 'directory'},
    {shortName: 'p', hasValue: true,  longName: 'port'},
    {shortName: 'r', hasValue: true,  longName: 'remove'},
    {shortName: 's', hasValue: false, longName: 'server'}
];
