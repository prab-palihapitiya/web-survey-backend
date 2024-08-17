FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma
RUN npx prisma generate

COPY . .

EXPOSE 4000

RUN npm run build

SHELL ["/bin/bash", "-c"]

CMD [ "node","dist/index.js" ]