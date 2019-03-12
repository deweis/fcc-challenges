# Free Code Camp - Applied InfoSec Challenges

=============================================

# Introduction to Information Security with HelmetJS Challenges

HelmetJS is a type of middleware for Express-based applications that automatically sets HTTP headers to prevent sensitive information from unintentially being passed between the server and client. While HelmetJS does not account for all situations, it does include support for common ones like Content Security Policy, XSS Filtering, and HTTP Strict Transport Security, among others. HelmetJS can be installed on an Express project from npm, after which each layer of protection can be configured to best fit the project.

Hackers can exploit known vulnerabilities in Express/Node if they see that your site is powered by Express.
**X-Powered-By:** Express is sent in every request coming from Express by default. The `helmet.hidePoweredBy()` middleware will remove the X-Powered-By header. You can also explicitly set the header to something else, to throw people off. e.g. app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))

Your page could be put in a `<frame>` or `<iframe>` without your consent. This can result in **clickjacking attacks**, among other things. Clickjacking is a technique of tricking a user into interacting with a page different from what the user thinks it is. This can be obtained executing your page in a malicious context, by mean of iframing. In that context a hacker can put a hidden layer over your page. Hidden buttons can be used to run bad scripts. This middleware sets the **X-Frame-Options** header. It restricts who can put your site in a frame. It has three modes: `DENY`, `SAMEORIGIN`, and `ALLOW-FROM`.
