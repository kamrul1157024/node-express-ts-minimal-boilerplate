FROM ubuntu:20.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update&&apt-get install -y nodejs npm wget
RUN rm -rf /usr/local/lib/node_modules \
  &&npm cache clean -f \
  && npm install -g n \
  && n 18.14.2
RUN npm install --g pnpm
WORKDIR /app/server
COPY ./package.json ./
COPY ./pnpm-lock.yaml ./
RUN pnpm install
COPY . .
