variable "aws_region" {
  type        = string
  default     = "eu-central-1"
  description = "AWS region for resource deployment"
}

variable "prefix" {
  type        = string
  default     = "n0thing-works"
  description = "Prefix for all AWS resources"
}

variable "instance_type" {
  type        = string
  default     = "t3.micro"
  description = "EC2 instance type (t2.micro is eligible for AWS Free Tier)"
}

variable "admin_username" {
  type        = string
  default     = "ubuntu"
  description = "Admin username on the AMI (ubuntu for Ubuntu AMIs)"
}

variable "ssh_public_key" {
  type        = string
  default     = ""
  sensitive   = true
  description = "Public SSH key for EC2 authentication (auto-loaded from ~/.ssh/id_rsa.pub if empty)"
}

variable "allowed_ssh_cidr" {
  type        = string
  default     = "0.0.0.0/0"
  description = "CIDR allowed to SSH into the instance"
}

variable "root_volume_size" {
  type        = number
  default     = 20
  description = "Root EBS volume size in GB"
}
