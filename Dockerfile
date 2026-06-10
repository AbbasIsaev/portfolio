FROM node:24-alpine as build
WORKDIR /usr/app
COPY . /usr/app/
RUN npm ci

# https://docs.docker.com/build/ci/github-actions/secrets/
RUN --mount=type=secret,id=SECRET_VITE_YMAP_API_KEY,env=VITE_YMAP_API_KEY \
    npm run build

FROM nginxinc/nginx-unprivileged
LABEL maintainer="Isaev Abbas"
EXPOSE 8080
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/dist /usr/share/nginx/html