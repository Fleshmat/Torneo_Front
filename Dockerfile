# Usa Node.js como base
FROM node:18

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package.json package-lock.json* ./

# Instala dependencias
RUN npm install

# Copia el código fuente al contenedor
COPY . .

# Expone el puerto de Vite (5173 por defecto)
EXPOSE 5173

# Comando para iniciar Vite en modo desarrollo
CMD ["npm", "run", "dev", "--", "--host"]
