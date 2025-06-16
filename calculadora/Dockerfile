# Use official Node.js 22.15 image
FROM node:22.15.1

# Set working directory
WORKDIR /usr/src/app

# Copy dependency definitions first (caching optimization)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY dist/ ./dist
# Expone el puerto en el que corre tu app (ajústalo según tu app)
EXPOSE 3000
# Comando para ejecutar la aplicación
CMD ["node", "dist/main.js"]
