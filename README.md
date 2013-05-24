mojito-docs
==========

[![Build Status](https://travis-ci.org/yahoo/mojito-cli-doc.png?branch=develop)](https://travis-ci.org/yahoo/mojito-cli-doc)

`mojito-docs` provides the `doc` command for `mojito-cli` that generates API documentation for Mojito, Mojito apps, 
or mojits. The `doc` command uses [yuidoc](https://github.com/yui/yuidoc) the API documentation.

Install
-------

`mojito-docs` is a dependency of `mojito-cli`, so you just need to
[install mojito-cli](https://github.com/yahoo/mojito-cli#install-mojito-cli)  to get `mojito-docs`. 

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

To serve the API docs over HTTP on the specified port number (Assumes `--server`):

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
