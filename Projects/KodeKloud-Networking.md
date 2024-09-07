# KodeKloud Networking

# :: To Forward ip in a dual nic on linux modify:
cat /proc/sys/net/ipv4/ip_forward=0 // by default, change to 1 to allow forwarding

# :: make changes persist accross reboots modify:
/etc/sysctl.conf : net.ipv4.ip_forward=1

# :: Commands to know.. :
ip link

ip addr
# :; set ip on an interface
ip addr add 192.168.1.10/24 dev eth0

# /etc/networkinterfaces
change for persistence





































a
