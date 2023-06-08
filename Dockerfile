# Define la imagen base
FROM node:16.14.0-alpine3.14

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de la aplicación
COPY . .

# Instala pnpm
RUN npm install -g pnpm

# Instala las dependencias
RUN pnpm install

# Compila la aplicación
RUN npm run build

# Exponer el puerto 3000
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "start"]