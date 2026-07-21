FROM nginx:1.27-alpine

COPY deploy/nginx.docker.conf /etc/nginx/conf.d/default.conf
COPY index.html styles.css app.js CNAME /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
