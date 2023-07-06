# Use the base Node.js 14 image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Copy the source code
COPY . .

# Install dependencies
RUN npm install

# Build the TypeScript files
RUN npm run build

# Specify the application port
EXPOSE 5000

# Specify the command to run your application
CMD [ "node", "dist/server.js" ]
