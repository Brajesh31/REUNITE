#!/bin/bash
set -e
# Build the docker image

DOCKERFILE="frontend.Dockerfile"
IMAGE="ayroid/lostfoundfe"

docker build -t $IMAGE -f $DOCKERFILE .

docker run -d \
    -p 4000:4000 \
    -v "$PWD":/usr/src/myapp \
    -v myvolume:/usr/src/myapp/node_modules \
    -w /usr/src/myapp \
    $IMAGE \
    bash -c "npm install && npm install nodemon -g && npm install -g npm@9.7.1 && nodemon app.js"
