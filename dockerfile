# Use Node.js 21 as the base image
FROM node:20.11.1-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files into the container
COPY . .

# Expose the Vite development server port
EXPOSE 5173

# Run the application
CMD ["npm", "run", "dev"]
