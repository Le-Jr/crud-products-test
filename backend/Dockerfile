FROM node:22

WORKDIR /app

# Copia os arquivos de dependência do backend
COPY ./package*.json ./

RUN npm install

# Copia o código fonte do backend para dentro do container
COPY ./src ./src

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
