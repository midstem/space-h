# This is express app build on bun runtime (instead of node)

### How to set up application locally

    docker compose up 

### Open 

    http://localhost:8080/doc/

### To stop 

    docker compose down

#

## This is an example of how to up and run 2 containers `app` and `mysql` using docker without docker-compose 

### Build image:

    docker build -t api:v1 .

### create network

    docker network create api-network

### Start mysql database:
    
    docker run \
    --rm \
    -d \
    --name mysql_db \
    -e MYSQL_DATABASE='space_db' \
    -e MYSQL_USER='anatol' \
    -e MYSQL_PASSWORD='secret' \
    -e MYSQL_ROOT_PASSWORD='secret' \
    --network api-network \
    mysql:8.0 

    
### Start api

    docker run \
    --rm \
    --name app \
    --network api-network \
    -p 3000:3000 \
    -v $(pwd):/app \
    api:v1 

### Stop running container using

    docker stop app
    docker stop mysql_db

## Run migrations
    docker exec -it api-app bun run db:migrate

## Run seeds
    docker exec -it api-app bun run db:seed