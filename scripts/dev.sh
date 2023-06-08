cd apps/auth-svc
npm run start:dev &
cd -

cd apps/payment-svc
npm run start:dev &
cd -

cd gateway
npm run start:dev &
cd -
