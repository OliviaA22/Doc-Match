
# Use a Node.js base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install both dependencies and devDependencies
RUN npm ci

# Copy the rest of the backend files
COPY . .

# Expose the port on which your backend server listens
EXPOSE 3000

# Set the environment variables
ENV NODE_ENV production

# Build the TypeScript code
RUN npm run build

# Start the backend server
CMD ["node", "dist/server.js"]
