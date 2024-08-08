#!/bin/sh
# Set up any environment variables or perform any other setup tasks here

# Print the MongoDB URI to verify it's being picked up

echo "MongoDB URI: ${PRODUCTION_DATABASE_URI}"

exec java -jar ecojober-backend.jar --spring.profiles.active=prod --spring.data.mongodb.uri=$PRODUCTION_DATABASE_URI