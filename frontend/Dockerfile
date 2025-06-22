# Use the official Node.js image as the base
FROM node

# Set the working directory inside the container
WORKDIR /usr/src/app

COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy project files to the container
COPY . .

# Expose the port your application uses
EXPOSE 4000

# Define the command to run your application
CMD [ "npm", "start" ]
