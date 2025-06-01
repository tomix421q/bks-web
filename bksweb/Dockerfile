# ---- Build Stage ----
# Použi oficiálny Node.js image ako základ pre build
FROM node:18-alpine AS build

# Nastav pracovný adresár v kontajneri
WORKDIR /app

# Skopíruj package.json a package-lock.json (alebo yarn.lock)
# Toto je robené ako prvé, aby sa využil Docker layer caching.
# Ak sa tieto súbory nezmenia, Docker nemusí znova sťahovať závislosti.
COPY package.json ./
# Ak používaš package-lock.json (odporúčané pre npm)
COPY package-lock.json ./
# Ak používaš yarn.lock (pre yarn)
# COPY yarn.lock ./

# Nainštaluj závislosti projektu
# Použi 'npm ci' ak máš package-lock.json, je to rýchlejšie a spoľahlivejšie pre CI/CD.
# Ak používaš yarn, zmeň na: RUN yarn install --frozen-lockfile
RUN npm ci

# Skopíruj zvyšok kódu aplikácie (src/, public/, vite.config.js, atď.)
COPY . .

# Zbuildi aplikáciu pre produkciu
# Tento príkaz by mal vytvoriť priečinok 'dist' v /app/dist
RUN npm run build

# ---- Production Stage ----
# Použi oficiálny nginx image ako základ pre servírovanie
FROM nginx:1.25-alpine AS production

# Odstráň defaultnú nginx konfiguráciu, aby sme ju mohli nahradiť vlastnou
RUN rm /etc/nginx/conf.d/default.conf

# Skopíruj vlastnú nginx konfiguráciu (vytvoríme ju v ďalšom kroku)
# Tento súbor musí byť v rovnakom adresári ako Dockerfile (teda v bksweb/)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Skopíruj zbuildované statické súbory z 'build' stage (z /app/dist)
# do defaultného adresára, odkiaľ nginx servíruje súbory (/usr/share/nginx/html)
COPY --from=build /app/dist /usr/share/nginx/html

# Vystav port 80 (štandardný HTTP port, na ktorom nginx počúva)
EXPOSE 80

# Príkaz na spustenie nginx v popredí (aby kontajner bežal)
CMD ["nginx", "-g", "daemon off;"]