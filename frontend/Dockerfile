FROM node AS builder

WORKDIR /vitejsapp

COPY . .

RUN npm install

RUN npm run build

FROM httpd:alpine

# Remove the default landing page
RUN ["/bin/sh", "-c", "rm -f /usr/local/apache2/htdocs/index.html"]

# Copy the build output
COPY --from=builder /vitejsapp/dist/ /usr/local/apache2/htdocs/

# Install curl for healthcheck
RUN ["/bin/sh", "-c", "apk --upgrade --no-cache add curl"]

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "curl", "http://localhost/index.html" ]
