FROM node:25

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
# RUN npm install express --save
# RUN npm install 
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY package*.json .

RUN npm install

EXPOSE 3000

# CMD ["node","index.js"]