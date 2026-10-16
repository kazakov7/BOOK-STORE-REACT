#!bin/bash

#production
git reset --hard
git checkout master
git pull origin master


npm i yarn -g
yarn global add serve
yarn
yarn run build
pm2 reload ELIF-REACT || pm2 restart ELIF-REACT || pm2 start "yarn run start:prod" --name=ELIF-REACT

#developent
# git reset --hard
# git checkout develop
# git pull origin develop

# npm i
# npm run build
# pm2 start process.config.js --env development