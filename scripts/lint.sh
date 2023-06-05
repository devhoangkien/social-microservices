#!/bin/bash

cd gateway && npm run lint && cd -
cd apps/auth && npm run lint && cd -
