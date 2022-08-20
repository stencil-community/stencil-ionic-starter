#!/bin/bash
set -e
set -o pipefail

npm run build
cd www
cp index.html 404.html
npx surge . https://stencil-ionic-starter.surge.sh
