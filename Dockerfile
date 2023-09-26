# Start the builder container.
FROM buildkite/puppeteer AS builder
WORKDIR /src

# Instal Dependencies.
COPY ./package.json .
RUN yarn

# Copy source files and build.
COPY ./static ./static
COPY ./data ./data
COPY ./src ./src
RUN yarn build

# Start the NGINX container.
FROM wisvch/nginx
COPY --from=builder /src/dist /srv
