#!/usr/bin/env bash

set -e
rm -rf docs
npm run generate-docs
cd docs
git init
git remote add origin git@github.com:drager/carrying.git
git checkout -b gh-pages
git add -A
git commit -am 'Deploy'
git push origin gh-pages --force
