# social microservices project NestJS and gRPC
- Docs
## Install Package and start project
### environment
- Nodejs -version: 18.16.0
- npm -version: 9.5.1
- 
### install
- Clone: `$ git clone https://github.com/devhoangkien/social-microservices.git`
- Install package: `cd social-microservices && yarn install-all || npm run install-all`
- docker: `yarn build `, `docker compose up`

## Directory structure 
``` shell
- app/
  - _proto
  - apps/
    - auth/
      - src/
        - auth/
          - auth.controller.ts
          - auth.module.ts
          - auth.proto
          - auth.service.ts
        - app.controller.ts
        - app.module.ts
        - app.service.ts
        - main.ts
      - test/
      - Dockerfile
      - package.json
      - ...
  - gateway/
    - src/
      - auth/
        - auth.module.ts
        - auth.controller.ts
        - auth.interface.ts
      - app.controller.ts
      - app.module.ts
      - app.service.ts
      - main.ts
    - test/
    - ...
  - docs/
  - scripts/
  - shared/
  - docker-compose.yml
  - package.json
```