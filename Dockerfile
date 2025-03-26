# 1. Usa una imagen de Node para construir la app
FROM node:18 AS builder

# 2. Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copia el package.json y el package-lock.json (o yarn.lock)
COPY package.json package-lock.json* ./

# 4. Instala las dependencias
RUN npm install

# 5. Copia el código fuente
COPY . .

# 6. Construye la aplicación
RUN npm run build

# 7. Usa una imagen de Nginx para servir los archivos estáticos
FROM nginx:alpine

# 8. Copia los archivos generados en la carpeta 'dist' al servidor Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# 9. Expone el puerto 80
EXPOSE 80

# 10. Arranca Nginx
CMD ["nginx", "-g", "daemon off;"]
