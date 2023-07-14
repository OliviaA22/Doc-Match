# Stage 1 - the build process
FROM node:14-alpine as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.19.0-alpine as production
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY --from=build-deps /usr/src/app/src/assets/css /usr/share/nginx/html/static/css
COPY --from=build-deps /usr/src/app/src/index.js /usr/share/nginx/html/static/js
COPY --from=build-deps /usr/src/app/public/manifest.json /usr/share/nginx/html/manifest.json
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
