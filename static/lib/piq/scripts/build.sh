#!/bin/bash

rm -rf dist
mkdir dist

esbuild ./src/utils/template-tag.js ./src/core/piq.js --bundle --format=esm --outdir=./dist/piq
