#!/bin/bash

cd gateway && rm -rf dist && rm -rf node_modules && npm i && cd -
cd apps/auth &&  rm -rf dist && rm -rf node_modules && npm i && cd -