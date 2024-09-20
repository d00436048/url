# Use the official Node.js image from the Docker Hub
FROM node:14

# Set the working directory inside the container
WORKDIR C:/Users/bridg/OneDrive/Various Documents/Desktop/url expander/Dockerfile

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that your app runs on
EXPOSE 3000

# Command to run your application
CMD ["node", "server.js"]
