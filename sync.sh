#!/bin/bash

cd /Users/boubou/website/portfolio.git
git pull origin gh-pages
git add -A .
git commit -am 'changes on Boubou'
git push origin gh-pages

