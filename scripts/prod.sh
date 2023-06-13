cd apps/auth-svc
npm run start:prod &
cd -

cd apps/payment-svc
npm run start:prod &
cd -

cd apps/user-svc
npm run start:prod &
cd -

cd gateway
npm run start:prod &
cd -


