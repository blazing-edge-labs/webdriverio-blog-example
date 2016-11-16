
# WebdriverIO Examples

I've been using the WebdriverIO testing framework for the last eight months and have had an incredibly positive experience, so I want to share the love. Also, this post should help provide reasons to consider WebdriverIO to someone looking for a new testing framework. The repo contains code examples mentioned in the post [WebdriverIO: Why and how to use it for testing](*url/to/post*). These examples show how to set up and use [WebdriverIO](http://webdriver.io/) using [Mocha](https://mochajs.org/), [Gulp](http://gulpjs.com/) and [Chai](http://chaijs.com/) for automated checking of the [craigslist](https://boston.craigslist.org/) classifieds page. The repo is in progress, I'll keep adding more examples as I explore more and more WebdriverIO functionalities. 

##Environment setup

* [Clone](https://git-scm.com/docs/git-clone) this repo
* Install [Node.js](https://nodejs.org/en/)
* Install gulp globally ```npm install gulp -g```

##Project packages

Typing ```npm install``` in the command line will install all the necessary packages for running the checking scripts locally.

Type ```selenium-standalone install``` to install the [Selenium Standalone](https://www.npmjs.com/package/selenium-standalone). This installs the selenium server and browser drivers (chrome, internet explorer, firefox and phantomjs driver).

##Set up the configuration file

You can either clone this repo or set up the config file manually. If you want to do it manually,
type ```wdio config``` and answer the questions about your project.

##Running the scripts

Type ```gulp test``` in the project's folder command line.
