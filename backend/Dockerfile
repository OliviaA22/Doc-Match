# Use the base Node.js 14 image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/backend

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Copy the server.ts file
COPY backend/src/server.ts .

# Build the TypeScript files
RUN npm run build

# Specify the application port
EXPOSE 5000

# Specify the command to run your application
CMD [ "node", "dist/server.js" ]