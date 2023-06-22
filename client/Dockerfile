# Stage 1 - the build process
FROM node:14 as build-deps

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of your application's source code
COPY . ./

# Build the app
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.21-alpine

# Copy build from stage 1
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
