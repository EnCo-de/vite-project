# Use an official Node.js runtime as a parent image for building the React app
FROM node:22.13 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app for production
RUN npm run build



# Use a lightweight web server (nginx unprivileged) as the final parent image
FROM nginxinc/nginx-unprivileged:alpine

# Environment variables to configure user permissions
ENV ENABLE_PERMISSIONS=TRUE
ENV DEBUG_PERMISSIONS=TRUE
ENV USER_NGINX=10014
ENV GROUP_NGINX=10014

# Set the working directory for NGINX
WORKDIR /usr/share/nginx/html

# Copy the built React app from the previous stage to the nginx web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Ensure proper permissions for NGINX to serve the files
USER root
# Create a user with a known UID/GID (10014) within the range 10000-20000 for Choreo
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/nonexistent" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid 10014 \
    "choreo"

RUN chown -R ${USER_NGINX}:${GROUP_NGINX} /usr/share/nginx/html

USER 10014

# Expose port 8080 for the application
EXPOSE 8080

# Start the nginx web server
CMD ["nginx", "-g", "daemon off;"]