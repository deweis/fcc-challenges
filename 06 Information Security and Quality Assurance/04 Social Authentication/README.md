**FreeCodeCamp**

The basic path this kind of authentication will follow in your app is:

    - User clicks a button or link sending them to our route to authenticate using a specific strategy (EG. Github)

    - Your route calls `passport.authenticate('github')` which redirects them to Github.

    - The page the user lands on, on Github, allows them to login if they aren't already. It then asks them to approve access to their profile from our app.

    - The user is then returned to our app at a specific callback url with their profile if they are approved.

    - They are now authenticated and your app should check if it is a returning profile, or save it in your database if it is not.

Strategies with OAuth require you to have at least a Client ID and a Client Secret which is a way for them to verify who the authentication request is coming from and if it is valid. These are obtained from the site you are trying to implement authentication with, such as Github, and are unique to your app - **THEY ARE NOT TO BE SHARED** and should never be uploaded to a public repository or written directly in your code. A common practice is to put them in your .env file and reference them like: `process.env.GITHUB_CLIENT_ID`. For this challenge we're going to use the Github strategy.

Obtaining your Client ID and Secret from Github is done in your account profile settings under 'developer settings', then 'OAuth applications'. Click 'Register a new application', name your app, paste in the url to your glitch homepage (Not the project code's url), and lastly for the callback url, paste in the same url as the homepage but with '/auth/github/callback' added on. This is where users will be redirected to for us to handle after authenticating on Github. Save the returned information as `'GITHUB_CLIENT_ID'` and `'GITHUB_CLIENT_SECRET'` in your .env file.

The last part of setting up your Github authentication is to create the strategy itself. For this, you will need to add the dependency of `'passport-github'` to your project and require it as GithubStrategy like `const GitHubStrategy = require('passport-github').Strategy;`.

To set up the Github strategy, you have to tell passport to use an instantiated GithubStrategy, which accepts 2 arguments: An object (containing `clientID`, `clientSecret`, and `callbackURL`) and a function to be called when a user is successfully authenticated which we will determine if the user is new and what fields to save initially in the user's database object. This is common across many strategies but some may require more information as outlined in that specific strategy's github README; for example, Google requires a `scope` as well which determines what kind of information your request is asking returned and asks the user to approve such access. The current strategy we are implementing has its usage outlined here, but we're going through it all right here on freeCodeCamp!
