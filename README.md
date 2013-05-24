mojito-cli-docs
===============

[![Build Status](https://travis-ci.org/yahoo/mojito-cli-doc.png?branch=develop)](https://travis-ci.org/yahoo/mojito-cli-doc)

`mojito-cli-docs` provides the `doc` command for `mojito-cli` that generates API documentation for Mojito, Mojito apps, 
or mojits. Install `mojito-cli` and `mojito-cli-docs` with the following: `npm install -g mojito-cli`

The `doc` command uses [yuidoc](https://github.com/yui/yuidoc) for generating the API documentation.

Usage
-----

To generate documentation for a mojito application, including all the mojits in it's `mojits/` subdirectory, 
run the following from the application directory:

    $ mojito docs app

To generate documentation for a specific mojit, run the following from the application directory:

    $ mojito docs mojit <mojit-name>

To generate documentation for the Mojito framework itself:

    $ mojito docs mojito

### Options

To specify the output directory:

    --directory <path>
    -d <path>

To serve the API docs over HTTP without rendering them to the file system:

    --server
    -s

To serve the API docs over HTTP on the specified port number (assumes `--server`):

    --port <number>
    -p <number>


Discussion/Forums
-----------------

http://developer.yahoo.com/forum/Yahoo-Mojito

Licensing and Contributions
---------------------------

`mojito-cli-doc` is licensed under a BSD license (see LICENSE.txt). To contribute to the Mojito project, 
please see [Contributing](https://github.com/yahoo/mojito/wiki/Contributing-Code-to-Mojito).

The Mojito project is a [meritocratic, consensus-based community project](https://github.com/yahoo/mojito/wiki/Governance-Model),
which allows anyone to contribute and gain additional responsibilities.
