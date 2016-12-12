# cleverbot.io

[![npm status](http://img.shields.io/npm/v/cleverbot.io.svg)](https://www.npmjs.org/package/cleverbot.io)
[![build status](https://secure.travis-ci.org/CleverbotIO/node-cleverbot.io.svg)](http://travis-ci.org/CleverbotIO/node-cleverbot.io)
[![Slack Status](https://slack.cleverbot.io/badge.svg)](https://slack.cleverbot.io)

### Installation

To install this package, simply enter the following in your console
```
npm install --save cleverbot.io
```
  Note: It is a good practice to include *--save* to add this to your dependencies in your package.json
  
### Setup

Before using this module, please get your API keys at [http://cleverbot.io/keys](http://cleverbot.io/keys)

To initialize cleverbot, require the module, then create a new instance of cleverbot
``` node
var cleverbot = require("cleverbot.io"),
bot = new cleverbot("YOUR_API_USER", "YOUR_API_KEY");
```
### Creating Sessions
    
*cleverbot.io* allows you to save cleverbot sessions to access later
If you've already created a session previously, simply add the following code to reference it
``` node
bot.setNick("sessionname")
```
To create or access a cleverbot session, start with the following
``` node
bot.create(function (err, session) {
  // session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you
  
  // Woo, you initialized cleverbot.io.  Insert further code here
});
```
### Querying Cleverbot

Now querying cleverbot is simple, you pass the text to the *.ask()* method
``` node
bot.ask("Just a small town girl", function (err, response) {
  console.log(response); // Will likely be: "Living in a lonely world"
});
```
Well, that's it for now!  Happy hacking!

**Cleverbot.io is free and open source, and will remain so.**
