docker -v
docker-compose -v

docker-compose up -d --remove-orphans
docker-compose scale chromenode=5

# docker kill $(docker ps -aq)
# docker rm $(docker ps -aq)