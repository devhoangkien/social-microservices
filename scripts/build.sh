#!/bin/bash

cd gateway && rm -rf dist && npm run build && cd -
cd apps/auth  && rm -rf dist && npm run build && cd -

docker-compose build --no-cache