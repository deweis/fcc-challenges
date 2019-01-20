boilerplate from https://github.com/freeCodeCamp/boilerplate-npm/
--> removed git stuff

- URL to edit: https://glitch.com/~clammy-bench
- URL to fCC test: https://clammy-bench.glitch.me/

**package.json**: The file package.json is the center of any Node.js project or npm package. It stores information about your project just like the `<head>`-section in a HTML document describes the content of a webpage. The package.json consists of a single JSON-object where information is stored in "key": value-pairs. There are only two required fields in a minimal package.json - name and version - but it’s a good practice to provide additional information about your project that could be useful to future users or maintainers.

One of the most common pieces of information in this file is the `author-field` that specifies who’s the creator of a project. It can either be a string or an object with contact details. When adding that field; remember that you're writing JSON. All field-names must use double-quotes ("), e.g. "author". All fields must be separated with a comma (,).

The next part of a good package.json is the `description-field`, where a short but informative description about your project belongs. Since it’s a great way to summarize what a project does, it’s just as important for your normal Node.js-projects to help other developers, future maintainers or even your future self understand the project quickly.

The `license-field` is where you inform users of your project what they are allowed to do with it. http://choosealicense.com is a great resource if you want to learn more about what license could fit your project.
