#!/bin/bash

cd gateway && npm run copy:protos && rm -rf dist  &&  npm run build && cd -
cd apps/auth  && npm run copy:protos && rm -rf dist  && npm run build && cd -

docker-compose build --no-cache