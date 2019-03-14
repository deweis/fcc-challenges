# Free Code Camp - Applied InfoSec Challenges

=============================================

# Introduction to Information Security with HelmetJS Challenges

HelmetJS is a type of middleware for Express-based applications that automatically sets HTTP headers to prevent sensitive information from unintentially being passed between the server and client. While HelmetJS does not account for all situations, it does include support for common ones like Content Security Policy, XSS Filtering, and HTTP Strict Transport Security, among others. HelmetJS can be installed on an Express project from npm, after which each layer of protection can be configured to best fit the project.

- https://helmetjs.github.io/docs/

Hackers can exploit known vulnerabilities in Express/Node if they see that your site is powered by Express.
**X-Powered-By:** Express is sent in every request coming from Express by default. The `helmet.hidePoweredBy()` middleware will remove the X-Powered-By header. You can also explicitly set the header to something else, to throw people off. e.g. app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))

- https://helmetjs.github.io/docs/hide-powered-by/

Your page could be put in a `<frame>` or `<iframe>` without your consent. This can result in **clickjacking attacks**, among other things. Clickjacking is a technique of tricking a user into interacting with a page different from what the user thinks it is. This can be obtained executing your page in a malicious context, by mean of iframing. In that context a hacker can put a hidden layer over your page. Hidden buttons can be used to run bad scripts. This middleware sets the **X-Frame-Options** header. It restricts who can put your site in a frame. It has three modes: `DENY`, `SAMEORIGIN`, and `ALLOW-FROM`.

- https://helmetjs.github.io/docs/frameguard/

**Cross-site scripting (XSS)** is a frequent type of attack where malicious scripts are injected into vulnerable pages, with the purpose of stealing sensitive data like session cookies, or passwords.
The basic rule to lower the risk of an XSS attack is simple: **“Never trust user’s input”**. As a developer you should always sanitize all the input coming from the outside. This includes data coming from forms, GET query urls, and even from POST bodies. Sanitizing means that you should find and encode the characters that may be dangerous e.g. `<, >`.
Modern browsers can help mitigating the risk by adopting better software strategies. Often these are configurable via http headers.
The **X-XSS-Protection HTTP header** is a basic protection. The browser detects a potential injected script using a heuristic filter. If the header is enabled, the browser changes the script code, neutralizing it.
It still has limited support.

- https://helmetjs.github.io/docs/xss-filter/

Browsers can use **content or MIME sniffing** to adapt to different datatypes coming from a response. They override the Content-Type headers to guess and process the data. While this can be convenient in some scenarios, it can also lead to some dangerous attacks. This middleware sets the `X-Content-Type-Options` header to `nosniff`. This instructs the browser to not bypass the provided Content-Type.

- https://helmetjs.github.io/docs/dont-sniff-mimetype/
