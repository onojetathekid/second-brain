## KodeKloud


echo $shell - print shell to screen
echo is a command to print to screen
Ls - list files and GoogleBackedUPFolder
cd - change directory
pwd - present working directory
## To Make a Directory
mkdir - make directory\
mkdir -p /tmp/aisa/india/bangalore - (-p) allows for directory tree creation
## To Remove a directory
rm -r /nameOfDirecotry/ToDelete
## To Copy a Dir and all it's contents from 1 loc to another
cp -r my_dir1 /tmp/my_dir1echo


touch new_file.txt - create a new file No Contents
cat > new_file.txt - add contents to a file
cat new_file.txt - view the contents
cp source_file.txt target_file.txt - copy file

mv new_file.txt sample_file.txt - cut and paste or rename

rm new_file - to remove a file

## Download files
curl http://www.some-site.com/some-file.txt -O

 curl url -O // -O saves the results to a file

 wget http://ww.some-site/some-file.txt -O some-file.context

## Version of OS
cat /etc/*release*
cat /etc/os-release

# :::::::::::::::::::::::::::::::::::
# Linux Package Managers
# :::::::::::::::::::::::::::::::::::

* RPM (Red Hat Package Manager)

rpm -i telent.rpm // to install Package
# sudo rpm -i ftp-0.17-89.el9.x86_64.rpm
# You can get exact package name by:
rpm -qa | grep ftp //exact package name
rpm -e telnet    // uninstall Package
rpm -q telnet     //query Package

* Yum (searched dependacies and installs in right order)
  * /etc/yum.repos.d //  info about repositories

yum install ansible // searched for all files needed

yum list ansibl // apt list docker is an example on ubuntu
sudo yum install maven-1:3.6.3-13.el9.noarch
sudo yum remove maven // uninstalls package

# :::::::::::::::::::::::::::::::::::::::::
# Linux Services
# :::::::::::::::::::::::::::::::::::::::::
# help config sftw in bckgrnd and make sure they startup in proper order

service httpd start // starts httpd services

Newer method
# :: New Command :::::::::::::::::::::::
systemctl start httpd
systemctl stop httpd
systemctl status httpd
systemctl enable httpd
systemctl disable httpd

# :::::::::::::: /etc/systemd/system :::::::::::::
# ::::::::::::::::::::::::::::::::::::::::::::::::
# How to configure your application as a service
# How to Make sure you app starts a boot
# ::::::::::::::::::::::::::::::::::::::::::::::::

# :::::::::::::::::::::::::::::::::::::::::::::::::::::
# modify the /etc/systemd/system and add the following:
[Unit]
Description=My python web application

[Service]
ExecStart=/usr/bin/python3S /opt/code/my_app.py
Restart=always

[Install]
WantedBy=multi-user.target
WantedBy=printer.target multi-user.target
# :::: enough to config application as a service :::::
# :::::::::::::::::::::::::::::::::::::::::::::::::::::

systemctl deamon-reload
systemctl start my_app




























z
