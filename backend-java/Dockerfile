# Build
FROM maven:3.9.7-eclipse-temurin-17-alpine AS builder
WORKDIR /tmp/staging-area

COPY . .
RUN mvn clean package -Dmaven.test.skip=true

# Package
FROM eclipse-temurin:17-jre-alpine AS runner
RUN apk add curl

COPY --from=builder /tmp/staging-area/target/ecojober-1.0.0.jar ecojober-backend.jar
HEALTHCHECK --interval=10s --timeout=3s --start-period=10s --retries=10 \
	CMD curl http://localhost:8080/actuator/health || exit 1
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=prod", "ecojober-backend.jar"]
