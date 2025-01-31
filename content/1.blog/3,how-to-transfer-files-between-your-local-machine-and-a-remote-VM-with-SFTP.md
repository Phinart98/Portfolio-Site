---
navigation:
  title: 'How to Transfer Files Between Your Local Machine and a Remote VM with SFTP'
  description: 'A guide to securely transferring files using SFTP on WSL'
  date: January 31, 2025
  readingTime: 4 min read
---

# How to Transfer Files Between Your Local Machine and a Remote VM with SFTP

<h6>

  {{ navigation.date }} &bull; {{ navigation.readingTime }}
  
</h6>

When working with remote virtual machines (**VMs**), you often need to transfer files between your local system and the remote server. **Secure File Transfer Protocol (SFTP)** is a secure and reliable way to handle these transfers over SSH.

In this guide, I’ll walk through how to use SFTP to move files between your local machine(with WSL) and a remote VM.

## Prerequisites

- ✅ A remote VM with SSH access
- ✅ Windows Subsystem for Linux (**WSL**) installed and configured. [Read here](https://learn.microsoft.com/en-us/windows/wsl/setup/environment)
- ✅ An SSH client (included by default in WSL)
- ✅ The private key for your VM. Check out [this guide](./how-to-SSH-into-a-Remote-VM-from-WSL) for more info on generating one.

## Step 1: Understanding SFTP

SFTP (**Secure File Transfer Protocol**) is an extension of SSH that allows for secure file transfers. Unlike FTP, SFTP encrypts both commands and data, making it a safer choice for transferring files to cloud instances.

With SFTP, you can:
- Upload and download files
- Navigate directories on the remote VM
- Change file permissions
- Resume interrupted transfers

## Step 2: Establish an SFTP Connection

First, connect to your VM using SFTP. If you have an SSH config file set up (as explained in [this guide](./how-to-ssh-into-a-remote-vm)), simply run:

```sh
sftp [Your VM's Alias or whatever  you named it in the config file]
```

Once connected, you'll see an `sftp>` prompt, indicating that you're inside the SFTP shell.

## Step 3: Basic SFTP Commands

Here are some essential commands to navigate and transfer files:

### Listing files in the remote VM
```sh
ls
```

### Navigating directories
```sh
cd /path/to/remote/directory
```

### Uploading a file from your local machine to the VM
```sh
put localfile.txt /remote/path/
```

### Downloading a file from the VM to your local machine
```sh
get /remote/path/file.txt localfile.txt
```

### Uploading an entire directory
```sh
put -r my_local_folder /remote/path/
```

### Downloading an entire directory
```sh
get -r /remote/path/my_folder ./
```

## Step 4: Troubleshooting Common Issues

🚧 **Permission Denied Errors**
- Verify that the target directory has the correct write permissions.

🚧 **Connection Timeout**
- Check if your VM’s firewall allows SFTP (port 22 should be open).
- Run `ping [Your VM's Public IP]` to confirm the server is reachable.

🚧 **File Not Found Errors**
- Use `pwd` inside SFTP to check your current remote directory.
- Use `lcd` in SFTP to change your local directory.

## Wrapping Up

SFTP is a simple yet powerful tool for securely transferring files between your local machine and a remote VM. Whether you're uploading application files or fetching logs, mastering SFTP will make your workflow more efficient.

