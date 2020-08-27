FROM node:13-alpine

COPY . /BOOKAPI/
WORKDIR /BOOKAPI
RUN npm i
EXPOSE 3000

CMD [ "npm", "start" ]