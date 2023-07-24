FROM node:19.0.1

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm","start"]