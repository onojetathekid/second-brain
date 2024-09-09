## VPC Firewall Rules

* Appies to projects or networks
* Allow or Deny
* incoming OR outgoing
* VPC Networks function as a Distributed Firewall between Instances and other Networks.
* Rules - define: Network, protocol, ports, sources, destinations, target
* NO Egress Traffic tcp port 25 iun a vpc

# :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
# ::::::::::::::::: Implied Firewall Rules ::::::::::::::::::::::
# ::::::::::::::::: Pre-Populated Rules     ::::::::::::::::::::::

* Only TCP, UDP, ICMP and GRE are allowed protocols in GCP, all others are blocked.

## GCP Always allow communication between instance and Metadata Server@  169.254.169.254
# Metadata Server Services:
    - DHCP
    - DNS
    - Instance Metadata
    - NTP

## Every Network 2 Rule Per Network...
  - Deny Incoming
      deny ingress
      default allow ingress for ICMP, RDP, SSH
  - Permit Outgoing
      Allow egress

# Firewall rule Characteristics
Rules Applies to:
  - only support ipv4
  - only in or out
  - Allow or Deny(Not Both)
  - Can disable the enable
  - create rules for VPC Networks cannot share FW rules
  - Stateful FW - Request responses are allowed

##   (5 Tuple) TCP/IP Connections- Src IP, dest ip, src port, dest port & protocol
    - connection tracking table/state (considered active if 1 packet is sent every 10 mins)

## Firewall Rule Components:
1. VPC Network for the Rules
2. Priority - lower number higher Priority
3. Direction of traffic - ingress/Egress
4. Action On Match - Allow/deny
5. Target -
    a. All instances in networks
    b. Instances by target tag
    c. instance by target service account(specific service accounts)
6. Source Filter- Source for ingress / or / dest for egress Rules
      1. Source IP Ranges - source for packed inside or outside of GCP
      2. Source Tags  
      3. Source Service Account
7. Protocols and ports  
      - Omit Protocols or Ports then the rule applies to all Traffic
      -
Enable or Disable FW Rules... All Rules are enable when created by default
