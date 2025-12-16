# Dockerfile
FROM node:20-alpine

WORKDIR /usr/src/app

# 1. Installer les dépendances
COPY package*.json ./
RUN npm install

# 2. Copier le code
COPY . .

# 3. Build Next en mode production
RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000

# 4. Lancer Next en prod
CMD ["npm", "start"]