#!/bin/bash
set -euo pipefail

# Bootstrap EC2 (Ubuntu) for n0thing-works Docker deploy
export DEBIAN_FRONTEND=noninteractive

apt-get update -y
apt-get upgrade -y
apt-get install -y ca-certificates curl gnupg lsb-release nginx certbot python3-certbot-nginx

# Docker Engine + Compose plugin
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" \
  > /etc/apt/sources.list.d/docker.list

apt-get update -y
apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

systemctl enable --now docker

# App directory used by GitHub Actions deploy
mkdir -p /opt/n0thing-works
chown ubuntu:ubuntu /opt/n0thing-works
usermod -aG docker ubuntu

# Minimal host nginx reverse proxy to container on 127.0.0.1:8080
# Replace with deploy/nginx.conf.example + certbot for production TLS
cat > /etc/nginx/sites-available/n0thing-works <<'NGINX'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
NGINX

rm -f /etc/nginx/sites-enabled/default
ln -sf /etc/nginx/sites-available/n0thing-works /etc/nginx/sites-enabled/n0thing-works
nginx -t && systemctl enable --now nginx && systemctl reload nginx

echo "Bootstrap complete at $(date -u +%Y-%m-%dT%H:%M:%SZ)" > /var/log/n0thing-works-bootstrap.log
