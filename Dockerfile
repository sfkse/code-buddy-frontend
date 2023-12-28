# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json .

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3001 for the application
EXPOSE 3001

# Start the application
CMD ["yarn", "run", "dev"]
