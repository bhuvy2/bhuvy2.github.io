#!/bin/bash

set -e;

TMP_DIR=`mktemp -d`
cp -R ./build/* $TMP_DIR;

pushd $TMP_DIR;

git init
git remote add origin git@github.com:bhuvy2/bhuvy2.github.io.git
git add -A
git commit -m "Deploying to site"
git push origin master --force

popd;
