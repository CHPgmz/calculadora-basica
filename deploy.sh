#!/usr/bin/envsh

set -e

npm run build

dist cd

git init
git add -A
git commit -m 'deploy'

cd -
