boilerplate from https://github.com/freeCodeCamp/boilerplate-npm/
--> removed git stuff

- URL to edit: https://glitch.com/edit/#!/fcc-node-express-dw
- URL to fCC test: https://fcc-node-express-dw.glitch.me

**Node.js** is a JavaScript tool that allows developers to write backend (server-side) programs in JavaScript. Node.js comes with a handful of built-in modules—small, independent programs—that help facilitate this purpose. Some of the core modules include:

- HTTP: a module that acts as a server
- File System: a module that reads and modifies files
- Path: a module for working with directory and file paths
- Assertion Testing: a module that checks code against prescribed constraints

**Express**, while not included with Node.js, is another module often used with it. Express runs between the server created by Node.js and the frontend pages of a web application. Express also handles an application's routing. Routing directs users to the correct page based on their interaction with the application.
The Express App object has several methods, and we will learn many of them in these challenges. One fundamental method is `app.listen(port)`. It tells your server to listen on a given port, putting it in running state.

In Express, routes takes the following structure: `app.METHOD(PATH, HANDLER)`. **METHOD** is an http method in lowercase. **PATH** is a relative path on the server (it can be a string, or even a regular expression). **HANDLER** is a function that Express calls when the route is matched.

Handlers take the form `function(req, res) {...}`, where **req** is the request object, and **res** is the response object.
