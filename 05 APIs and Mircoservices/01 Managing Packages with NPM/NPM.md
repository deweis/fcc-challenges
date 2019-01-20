boilerplate from https://github.com/freeCodeCamp/boilerplate-npm/
--> removed git stuff

- URL to edit: https://glitch.com/~clammy-bench
- URL to fCC test: https://clammy-bench.glitch.me/

**package.json**: The file package.json is the center of any Node.js project or npm package. It stores information about your project just like the `<head>`-section in a HTML document describes the content of a webpage. The package.json consists of a single JSON-object where information is stored in "key": value-pairs. There are only two required fields in a minimal package.json - name and version - but it’s a good practice to provide additional information about your project that could be useful to future users or maintainers.

One of the most common pieces of information in this file is the `author-field` that specifies who’s the creator of a project. It can either be a string or an object with contact details. When adding that field; remember that you're writing JSON. All field-names must use double-quotes ("), e.g. "author". All fields must be separated with a comma (,).

The next part of a good package.json is the `description-field`, where a short but informative description about your project belongs. Since it’s a great way to summarize what a project does, it’s just as important for your normal Node.js-projects to help other developers, future maintainers or even your future self understand the project quickly.

The `license-field` is where you inform users of your project what they are allowed to do with it. http://choosealicense.com is a great resource if you want to learn more about what license could fit your project.

Versions of the npm packages in the dependencies-section of your package.json follow what’s called **Semantic Versioning (SemVer)**, an industry standard for software versioning aiming to make it easier to manage dependencies. Libraries, frameworks or other tools published on npm should use SemVer in order to clearly communicate what kind of changes that projects who depend on the package can expect if they update. Knowing SemVer can be useful when you develop software that use external dependencies (which you almost always do). One day, your understanding of these numbers will save you from accidentally introducing breaking changes to your project without understanding why things “that worked yesterday” suddenly doesn’t.

Given a version number MAJOR.MINOR.PATCH, increment the:

- **MAJOR** version when you make incompatible API changes,
- **MINOR** version when you add functionality in a backwards-compatible manner, and
- **PATCH** version when you make backwards-compatible bug fixes.

This means that PATCHes are bug fixes and MINORs add new features but neither of them break what worked before. Finally, MAJORs add changes that won’t work with earlier versions.
