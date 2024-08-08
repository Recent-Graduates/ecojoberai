# Build stage
FROM maven:3.9.7-eclipse-temurin-17-alpine AS builder
WORKDIR /tmp/staging-area

# Copy application code and build it
COPY . .
RUN mvn clean package -Dmaven.test.skip=true

# Package stage
FROM eclipse-temurin:17-jre-alpine AS runner

# Install curl for health check
RUN apk add --no-cache curl

# Set up environment variables
ARG PRODUCTION_DATABASE_URI
ENV PRODUCTION_DATABASE_URI=${PRODUCTION_DATABASE_URI}

# Copy the built JAR and script from the build stage
COPY --from=builder /tmp/staging-area/target/ecojober-1.0.0.jar /ecojober-backend.jar
COPY --from=builder /tmp/staging-area/runContainer.sh /runContainer.sh

# Make the shell script executable
RUN chmod +x /runContainer.sh

# Set up health check
HEALTHCHECK --interval=10s --timeout=3s --start-period=10s --retries=10 \
    CMD curl -f http://localhost:8080/actuator/health || exit 1

# Expose port and set entrypoint
EXPOSE 8080
ENTRYPOINT ["/runContainer.sh"]
