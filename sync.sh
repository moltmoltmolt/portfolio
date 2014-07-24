#!/bin/bash

CNT=3

P () {
    echo -e "\033[01;34m$CNT :: \033[00m\033[01;01m $1\033[00m"
    ((CNT--))
}

cd "$(dirname "$0")" \
    && P 'git pull origin gh-pages' \
    && git pull origin gh-pages \
    && P 'git add -A .' \
    && git add -A . \
    && git commit -am 'changes on Boubou' \
    && P 'git push origin gh-pages' \
    && git push origin gh-pages
