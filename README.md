# n0thing.works

Personal portfolio — [n0thing.works](https://n0thing.works)

Static site (HTML/CSS/JS). Dark/light theme, EN / PL / UA.

## Local

```bash
docker compose up -d --build
# http://127.0.0.1:8080
```

Or open `index.html` directly.

## Deploy (VPS)

Push to `main` → GitHub Actions builds `ghcr.io/despa1r0/n0thing-works` and restarts the container on the VPS.

**GitHub secrets**

| Secret | Example |
|--------|---------|
| `VPS_HOST` | `1.2.3.4` |
| `VPS_USER` | `deploy` |
| `VPS_SSH_PRIVATE_KEY` | private key |
| `VPS_PORT` | `22` (optional) |
| `VPS_DEPLOY_DIR` | `/opt/n0thing-works` (optional) |

**One-time VPS setup**

```bash
# Docker
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker "$USER"

# App dir
sudo mkdir -p /opt/n0thing-works
sudo chown "$USER:$USER" /opt/n0thing-works

# Host nginx: TLS + reverse proxy to 127.0.0.1:8080
# see deploy/nginx.conf.example
```

Allow the deploy user to pull from GHCR (public package or `docker login` with a PAT that has `read:packages`).
