# Note: This Dockerfile is for a Node.js application using Prisma and PostgreSQL.
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
# Note: Ensure that the Dockerfile is in the root of your project
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose the application port
# Note: The port 4106 is used for the backend service
EXPOSE 4106

# Start the application
CMD ["npm", "run", "dev"]