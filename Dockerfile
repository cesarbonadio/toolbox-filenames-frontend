FROM node:14

WORKDIR /toolboxfrontend
EXPOSE 5173
COPY . .
RUN npm install

CMD [ "npm", "run", "dev" ]