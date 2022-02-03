FROM node:13 AS web-build
RUN mkdir /web
WORKDIR /web
RUN chmod -R 770 /web

COPY . .

RUN npm install
RUN npm run build 

FROM nginx
COPY --from=web-build /web/dist /usr/share/nginx/html
RUN chown -R  nginx:nginx /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]