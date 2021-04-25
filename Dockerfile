FROM debian:jessie

RUN apt-get update

RUN apt-get install -y curl make g++

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs

ADD package.json /package.json
RUN npm install

WORKDIR /

EXPOSE 8085

CMD ["node", "index.js"]
