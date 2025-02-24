FROM mcr.microsoft.com/playwright:v1.50.1
 
WORKDIR /app/Playwright-Music-Discovery

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]