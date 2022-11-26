FROM node:16.14.2

RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN cd /app/server && npm install
RUN cd /app/client && npm install
RUN npm run build

EXPOSE 80

CMD ["npm", "start"]