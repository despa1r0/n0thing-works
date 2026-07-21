# n0thing.works

Personal portfolio — [n0thing.works](https://n0thing.works)

Static site (HTML/CSS/JS). Dark/light theme, EN / PL / UA.

## Local

```bash
docker compose up -d --build
# http://127.0.0.1:8080
```

Or open `index.html` directly.

## Infrastructure (AWS + Terraform)

Provisions Ubuntu EC2, security group (22/80/443), Elastic IP, and runs `script.sh` on first boot (Docker, nginx reverse proxy).

```bash
# credentials: AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY or aws configure
terraform init
terraform plan
terraform apply
```

Outputs include `vm_public_ip` and `ssh_command`. Point DNS A record for `n0thing.works` at that IP, then on the box:

```bash
sudo certbot --nginx -d n0thing.works -d www.n0thing.works
# optional: replace site config with deploy/nginx.conf.example
```

## Deploy (CI/CD → EC2)

Push to `main` / `master` → GitHub Actions builds `ghcr.io/<owner>/n0thing-works` and restarts the container on EC2.

**GitHub secrets**

| Secret | Example |
|--------|---------|
| `VPS_HOST` | EC2 Elastic IP from `terraform output vm_public_ip` |
| `VPS_USER` | `ubuntu` |
| `SSH_PRIVATE_KEY` | private key matching the public key used in Terraform |
| `VPS_PORT` | `22` (optional) |
| `VPS_DEPLOY_DIR` | `/opt/n0thing-works` (optional) |

**One-time** is covered by Terraform `user_data` (`script.sh`). Manual fallback:

```bash
# Docker + app dir + host nginx → 127.0.0.1:8080
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker "$USER"
sudo mkdir -p /opt/n0thing-works && sudo chown "$USER:$USER" /opt/n0thing-works
# see deploy/nginx.conf.example for TLS
```

GHCR package should be public, or run `docker login` on the instance with a PAT that has `read:packages`.
