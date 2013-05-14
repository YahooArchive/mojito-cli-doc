mojito-docs
==========
<!-- [![Build Status](https://travis-ci.org/yahoo/mojito-cli-doc.png)](https://travis-ci.org/yahoo/mojito-cli-doc) -->

Generate API documentation for mojito, mojito apps, or mojits. Uses YUIDocJs.

Install
-------
This package provides the `doc` command for the [`mojito-cli`](https://github.com/yahoo/mojito-cli) tool. Install `mojito-cli` to use the `mojito doc` command.

Usage
-----
To generate documentation for a mojito application, including all mojits in it's `mojits/` sub-directory, run the following from the application directory:

    $ mojito docs app

Output is written to {app-dir}/artifacts/docs/.

To generate documentation for a specific mojit, run the following from the application directory:

    $ mojito docs mojit <mojit-name>

Output is written to {app-dir}/artifacts/docs/mojits/{mojit-name}/.

To generate documentation for the Mojito framework itself:

    $ mojito docs mojito

### Options
    --directory <path>
    -d <path>
Specify output directory.

    --server
    -s
Serve the API docs over HTTP, do not render files to the file system.

    --port <number>
    -p <number>
Serve the API docs over HTTP on the specified port number. Assumes --server.


Discussion/Forums
-----------------

http://developer.yahoo.com/forum/Yahoo-Mojito

Licensing and Contributions
---------------------------

mojito-cli-doc is licensed under a BSD license (see LICENSE.txt). To contribute to the Mojito project, please see [Contributing](https://github.com/yahoo/mojito/wiki/Contributing-Code-to-Mojito).

The Mojito project is a [meritocratic, consensus-based community project](https://github.com/yahoo/mojito/wiki/Governance-Model) which allows anyone to contribute and gain additional responsibilities.
