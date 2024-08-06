# Build the container using the below command
# docker build -t ecojoberai_db:latest .

# Run the container using the below command 
# docker run -d -p 27018:27017 --name ecojoberai_db ecojoberai_db:latest


# Use the official MongoDB image from the Docker Hub
FROM mongo:5.0.27

# Copy the initialization script into the Docker image
COPY . /docker-entrypoint-initdb.d/