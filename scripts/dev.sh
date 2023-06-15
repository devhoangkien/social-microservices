cd apps/auth-svc && npm run build && npm run docker:build && cd -
cd apps/user-svc && npm run build && npm run docker:build && cd -

docker compose up