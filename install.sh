#!/bin/bash
path="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $path
npm install --ignore-scripts
cp -rf custom/browser-pack/_prelude.js node_modules/browser-pack/_prelude.js
