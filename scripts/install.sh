#!/bin/bash

cd gateway  && npm i && cd -
cd apps/auth-svc  && npm i && npm run copy:shared && cd -
cd apps/payment-svc  && npm i && cd -
cd apps/user-svc  && npm i && npm run copy:shared && cd -

# && rm -rf dist && rm -rf node_modules
