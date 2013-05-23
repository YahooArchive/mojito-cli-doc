mojito-cli-doc
==========

[![Build Status](https://travis-ci.org/yahoo/mojito-cli-doc.png?branch=develop)](https://travis-ci.org/yahoo/mojito-cli-doc)

Generate API documentation for mojito, mojito apps, or mojits. Uses [yuidoc](https://github.com/yui/yuidoc).

This package provides the `doc` command for the [`mojito-cli`](https://github.com/yahoo/mojito-cli) tool. Install `mojito-cli` to use the `mojito doc` command.

    npm install -g mojito-cli

Usage
-----
To generate documentation for a mojito application, including all mojits in it's `mojits/` sub-directory, run the following from the application directory:

    $ mojito docs app

To generate documentation for a specific mojit, run the following from the application directory:

    $ mojito docs mojit <mojit-name>

To generate documentation for the Mojito framework itself:

    $ mojito docs mojito

### Options

By default, the generated files are saved in `./artifacts/docs/`.

Specify output directory (if `--port` or `--server` are not used):

    --directory <path>
    -d <path>

Serve the API docs over HTTP, without rendering them to the file system (assumes `--port 3000`):

    --server
    -s

Serve the API docs over HTTP, like option `--server`, using the specified port number:

    --port <number>
    -p <number>


Discussion/Forums
-----------------

http://developer.yahoo.com/forum/Yahoo-Mojito

Licensing and Contributions
---------------------------

mojito-cli-doc is licensed under a BSD license (see LICENSE.txt). To contribute to the Mojito project, please see [Contributing](https://github.com/yahoo/mojito/wiki/Contributing-Code-to-Mojito).

The Mojito project is a [meritocratic, consensus-based community project](https://github.com/yahoo/mojito/wiki/Governance-Model) which allows anyone to contribute and gain additional responsibilities.
