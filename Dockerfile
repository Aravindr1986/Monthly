# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ./app/package.json ./app/package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY ./app .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js app runs on
EXPOSE 3000

# Command to run the Next.js application
CMD ["npm", "start"]