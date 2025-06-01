# ---- Build Stage ----
# Použi oficiálny Node.js image ako základ pre build
FROM node:18-alpine AS build

# Nastav pracovný adresár v kontajneri
WORKDIR /app

# Skopíruj package.json a package-lock.json (alebo yarn.lock)
# Používame *, aby to fungovalo pre npm aj yarn
COPY package*.json ./

# Nainštaluj závislosti projektu
# Ak používaš yarn, zmeň na: RUN yarn install --frozen-lockfile
RUN npm ci

# Skopíruj zvyšok kódu aplikácie
COPY . .

# Zbuildi aplikáciu pre produkciu
# Tento príkaz by mal vytvoriť priečinok 'dist'
RUN npm run build

# ---- Production Stage ----
# Použi oficiálny nginx image ako základ pre servírovanie
FROM nginx:1.25-alpine AS production

# Odstráň defaultnú nginx konfiguráciu
RUN rm /etc/nginx/conf.d/default.conf

# Skopíruj vlastnú nginx konfiguráciu (vytvoríme ju nižšie)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Skopíruj zbuildované statické súbory z 'build' stage
# do defaultného adresára, odkiaľ nginx servíruje súbory
COPY --from=build /app/dist /usr/share/nginx/html

# Vystav port 80 (štandardný HTTP port pre nginx)
EXPOSE 80

# Príkaz na spustenie nginx v popredí
CMD ["nginx", "-g", "daemon off;"]