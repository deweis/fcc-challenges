**Advanced Node and Express**

Authentication is the process or action of verifying the identity of a user or process.

The most common and easiest to use **authentication middleware** for Node.js is **Passport**. It is easy to learn, light-weight, and extremely flexible allowing for many strategies, which we will talk about in later challenges. In addition to authentication we will also look at template engines which allow for use of **Pug** and **web sockets** which allow for real time communication between all your clients and your server.

A **template engine** enables you to use static template files (such as those written in Pug) in your app. At runtime, the template engine replaces variables in a template file with actual values which can be supplied by your server, and transforms the template into a static HTML file that is then sent to the client. This approach makes it easier to design an HTML page and allows for displaying of variables on the page without needing to make an API call from the client.

One of the greatest features of using a template engine is being able to pass **variables** from the server to the template file before rendering it to HTML.

In your Pug file, you're about to use a variable by referencing the variable name as `#{variable_name}` inline with other text on an element or by using an equal side on the element without a space such as `p=variable_name` which sets that p elements text to equal the variable.

We strongly recommend looking at the syntax and structure of Pug [here](https://github.com/pugjs/pug) on their Githubs README. Pug is all about using whitespace and tabs to show nested elements and cutting down on the amount of code needed to make a beautiful site.

Looking at our pug file `index.pug` included in your project, we used the variables `title` and `message`

To pass those alone from our server, you will need to add an object as a second argument to your `res.render` with the variables and their value. For example, pass this object along setting the variables for your index view: `{title: 'Hello', message: 'Please login'});`

It should look like: `res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});`
