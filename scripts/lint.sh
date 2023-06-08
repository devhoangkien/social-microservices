#!/bin/bash

cd gateway && npm run lint && cd -
cd apps/auth-svc && npm run lint && cd -
cd apps/payment-svc && npm run lint && cd -

