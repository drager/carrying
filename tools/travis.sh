#!/usr/bin/env bash

# Fast fail the script on failures.
set -e

npm install
npm run lint
npm run test
