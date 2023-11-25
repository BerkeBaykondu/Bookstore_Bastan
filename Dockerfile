# Geliştirme ortamı için base image seçimi
FROM node:21

# Uygulama klasörünü oluşturun ve çalışma dizinini ayarlayın
WORKDIR /usr/src/app

# Uygulama bağımlılıklarını yükleme
COPY package*.json ./
RUN npm install

# Uygulama kodunu kopyalama
COPY . .

# Uygulama bağımlılıkları yükledikten sonra uygulamayı başlatma
CMD ["npm", "start"]