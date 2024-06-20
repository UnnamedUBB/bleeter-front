FROM node:20-alpine AS prod
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=prod /app/dist .
EXPOSE 80
EXPOSE 8080
EXPOSE 443
ENTRYPOINT ["nginx", "-g", "daemon off;"]
