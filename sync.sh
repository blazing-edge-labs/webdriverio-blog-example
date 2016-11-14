#!/bin/bash -x

ssh -p 10022 127.0.0.1  'rm -rfv /home/ana/webdriverio-blog-example/test /home/ana/webdriverio-blog-example/errorShots /home/ana/webdriverio-blog-example/allure-results/'
rsync -ve 'ssh -p 10022' -r wdio.conf.js package.json gulpfile.babel.js test 127.0.0.1:/home/ana/webdriverio-blog-example/
