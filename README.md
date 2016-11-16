
# WebdriverIO Examples 

[![CircleCI](https://circleci.com/gh/EastCoastProduct/webdriverio-blog-example.svg?style=svg)](https://circleci.com/gh/EastCoastProduct/webdriverio-blog-example)

This repo serves as a companion to a [blog post where I explain why I love WebdriverIO](https://blog.eastcoastproduct.com/webdriverio-why-and-how-to-use-it-for-testing). It contains several examples that I discussed in the blog post. These examples show how to set up and utilize [WebdriverIO](http://webdriver.io/) using [Mocha](https://mochajs.org/), [Gulp](http://gulpjs.com/) and [Chai](http://chaijs.com/) for automated checking of the [craigslist](https://boston.craigslist.org/) classifieds page. I will be continuously updating this and keep adding more examples as I explore more of WebdriverIO’s functionalities.

##Environment setup

First, you need to install [Node.js](https://nodejs.org/en/).

Then, the easiest way to start is to clone this repository and install its dependencies:

```
clone https://github.com/EastCoastProduct/webdriverio-blog-example.git
cd webdriverio-blog-example
npm install
``` 

This will install all the packages needed for running the checking scripts locally.

The postinstall script will automatically install the [Selenium Standalone server](https://www.npmjs.com/package/selenium-standalone) and browser drivers (drivers available for chrome, internet explorer, firefox and phantomjs). Only the Chrome and Firefox drivers get installed by default.

Now, install gulp globally 
```
npm install gulp -g
```
and the environment is set up!

##Setting up the configuration file

If you've cloned the repo, then you have my *wdio.conf.js* and you don't need to set it up. If you want to set it up differently, type
```
wdio config
```
into the command line and answer the questions about your project.

##Running the scripts

Type ```gulp test``` in the project's folder command line to start the automated checking scripts.
