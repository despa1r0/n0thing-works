output "vm_public_ip" {
  value       = aws_eip.web.public_ip
  description = "Public Elastic IP of the EC2 instance"
}

output "instance_id" {
  value       = aws_instance.web.id
  description = "EC2 instance ID"
}

output "ssh_user" {
  value       = var.admin_username
  description = "SSH username for the instance"
}

output "ssh_command" {
  value       = "ssh ${var.admin_username}@${aws_eip.web.public_ip}"
  description = "SSH command to connect to the instance"
}
