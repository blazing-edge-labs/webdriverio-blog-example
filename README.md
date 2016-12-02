
# WebdriverIO Examples

[![CircleCI](https://circleci.com/gh/EastCoastProduct/webdriverio-blog-example.svg?style=svg)](https://circleci.com/gh/EastCoastProduct/webdriverio-blog-example)

This repo serves as a companion to a [blog post where I explain why I love WebdriverIO](https://blog.eastcoastproduct.com/webdriverio-why-and-how-to-use-it-for-testing) and contains several examples that I discussed in the blog post. These examples show how to set up and utilize [WebdriverIO](http://webdriver.io/) using [Mocha](https://mochajs.org/), [Gulp](http://gulpjs.com/) and [Chai](http://chaijs.com/) for automated checking of the [craigslist](https://boston.craigslist.org/) classifieds page. I will be continuously updating this and keep adding more examples as I explore more of WebdriverIO’s functionalities I haven't had a chance to use before.

##Environment setup

First, you need to install [Node.js](https://nodejs.org/en/).

Then, the easiest way to start is to clone this repository and install its dependencies:

```
clone https://github.com/EastCoastProduct/webdriverio-blog-example.git && cd webdriverio-blog-example
npm install
```

This will install all the packages needed to run the checking scripts locally.

The postinstall script will automatically install the [Selenium Standalone server](http://www.seleniumhq.org/download/) and browser drivers (drivers available for Chrome, Internet Explorer, Firefox and PhantomJS). Only the Chrome and Firefox drivers get installed by default.

Now, install gulp globally
```
npm install -g gulp
```
and the environment is set up!

##Setting up the configuration file

If you've cloned the repo, then you have my *wdio.conf.js* and you don't need to set it up. If you want to customize the configuration file, type
```
wdio config
```
into the command line and answer the questions about your project.

##Running the scripts

Type ```gulp test``` in the project folder command line to start the automated checking scripts.

###package.json file

One cool thing I learned while setting up this repo is the npm's feature that any script has a set of pre- and post- hooks. I've used them in a way that when ```npm test``` is executed, npm will immediately run the ```npm pretest``` script, run the ```npm test``` and, finally, the ```npm run posttest```. You can see them in the *package.json* file, under ```"scripts"```:

```javascript
{
   "scripts": {
     "cleanup": "rm -rf ./allure-results && rm -rf ./allure-report && rm -rf ./errorShots",
     "pretest": "npm run cleanup",
     "test": "./node_modules/.bin/gulp test",
     "report": "./node_modules/.bin/allure generate allure-results",
     "posttest": "npm run report",
     "postinstall": "./node_modules/.bin/selenium-standalone install",
     "view-report": "allure report open"
  },
```

* ```"cleanup": "rm -rf ./allure-results && rm -rf ./allure-report && rm -rf ./errorShots"``` deletes folders with files from previous checks (the results, report and error folders) and runs automatically before every new checking run
* ```"report": "allure generate allure-results"``` builds a report from the checking log files saved to the ```./allure-results``` folder
* ```"view-report": "allure report open"``` opens the generated report in the browser. It was made to be run manually, because if run in CI env, it fails (the environment doesn't support the opening of a browser)

However, if you're going to run the checks locally without a CI tool, you can combine the two tasks into one like this:

```javascript
"scripts": {
  "cleanup": "rm -rf ./allure-results && rm -rf ./allure-report && rm -rf ./errorShots",
  "pretest": "npm run cleanup",
  "test": "./node_modules/.bin/gulp test",
  "report": "allure generate allure-results && allure report open",
  "posttest": "npm run report",
  "postinstall": "./node_modules/.bin/selenium-standalone install"
},
```
