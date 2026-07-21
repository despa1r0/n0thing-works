locals {
  ssh_public_key = var.ssh_public_key != "" ? var.ssh_public_key : file(pathexpand("~/.ssh/id_rsa.pub"))
  name_prefix    = var.prefix
}
