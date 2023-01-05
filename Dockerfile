# server image는 node.js 사용
FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
# 3000port 사용
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
