# Frontend Dockerfile
FROM node:22

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY ./src ./src

EXPOSE 5173


CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
