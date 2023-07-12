# Use an appropriate base image for the application
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/backend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend directory to the working directory
COPY . .

# Copy the .env file to the working directory
COPY .env ./

# Build TypeScript code
RUN npm run build

# Expose the port on which the backend server listens
EXPOSE 5000

# Set the command to start the backend server
CMD ["npm", "run", "dev"]

