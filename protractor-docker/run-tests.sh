docker -v
docker-compose -v

npm install 

docker-compose up -d --remove-orphans
docker-compose scale chromenode=5

./node_modules/.bin/protractor docker-selenium-grid-conf.js

# docker kill $(docker ps -aq)
# docker rm $(docker ps -aq)