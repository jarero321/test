# Utilizar la imagen oficial de Node.js
FROM node:16.14.0-alpine3.14

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de la aplicación
COPY . .

COPY package.json /app/
COPY . /app/
# Instala pnpm
RUN npm install -g pnpm

# Instala las dependencias
RUN pnpm install

# Compila la aplicación
RUN npm run build

# Instala Nginx
RUN apk add --update nginx

# Copia la configuración de Nginx al contenedor
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80 para Nginx
EXPOSE 80

# Iniciar Nginx y la aplicación
CMD ["sh", "-c", "nginx && npm start"]
