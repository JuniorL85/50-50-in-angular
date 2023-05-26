FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*"]
RUN npm install --production
COPY . .
RUN npm run build

# FROM caddy:2-alpine
# RUN apk add nss-tools
# WORKDIR /
# COPY --from=0 /usr/src/app/dist /srv
