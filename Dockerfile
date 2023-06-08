# Define la imagen base
FROM node:16.14.0-alpine3.14 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de la aplicación
COPY . .

# Instala las dependencias
RUN npm install

# Compila la aplicación
RUN npm run build

# Etapa final para la producción
FROM nginx:1.21.0-alpine

# Copia la compilación de la aplicación a NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# Copia la configuración de NGINX personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Iniciar NGINX en primer plano
CMD ["nginx", "-g", "daemon off;"]