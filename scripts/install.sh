#!/bin/bash

cd gateway && rm -rf dist && rm -rf node_modules && npm i && cd -
cd apps/auth-svc &&  rm -rf dist && rm -rf node_modules && npm i && cd -
cd apps/payment-svc &&  rm -rf dist && rm -rf node_modules && npm i && cd -
cd apps/user-svc &&  rm -rf dist && rm -rf node_modules && npm i && cd -

