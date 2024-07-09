FROM node:18.12.1-bullseye-slim

RUN npm install -g npm@9.1.3

ADD package.json .
ADD serverapp.js .
COPY . .
RUN mkdir -p uploads
RUN npm install

EXPOSE 3000

CMD [ "node", "serverapp.js" ]