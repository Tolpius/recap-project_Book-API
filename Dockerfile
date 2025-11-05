FROM node:22

COPY dist ./dist
COPY node_modules ./node_modules
COPY package*.json .
COPY tsconfig.json ./tsconfig.json

EXPOSE 3000

CMD ["npm", "run", "start"]