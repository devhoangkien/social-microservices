#!/bin/bash

cd gateway && npm run lint:fix && cd -
cd apps/auth && npm run lint:fix && cd -
