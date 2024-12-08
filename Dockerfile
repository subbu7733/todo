# Use an official Node.js image to build the app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React application for production
RUN npm run build

# Use an official Nginx image to serve the app
FROM nginx:1.23

# Copy the build folder from the previous stage to Nginx's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx will use
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
