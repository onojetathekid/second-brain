# Virtual Private Cloud VPC

# VPC - Virtual Private Cloud- Global
  Lives in a Project
  Firewalls

# VPC resources can communicate via Private IPv4 address within VPC
Support only IPv4 address
VPC had Default network unless disabled

#2 Networks:
#  Auto mode:
    Can be converted to custom mode but cannot move from custom to auto.
    Default GCP Networks Auto Mode
    ************ 10.128.0.0/9 CIDR Block ***********

#  Custom mode network
    Google recommends your custom configuration.
    Cannot be made into Auto-mode Network

#:::::::::::::::::::::::::::::::::::::::::::::::
#: change subnet from /20 to a /16 CLI
#:::::::::::::::::::::::::::::::::::::::::::

gcloud compute networks subnets expand-ip-rang default --region=us-west1 --prefix-length=16
Yes to Continue

# //verify subnet has changed IPCIDR /  run command
gcloud compute networks subnets describe default --region=us-west1


default vpc

# :::::::::: subnets / Subnetworks ::::::::::::::
# :::::::::::::::::::::::::::::::::::::::::::::::

# 4 Reserved IP Per network in primary IP Range
first 2
Last 2
1. Network - first address
2. default-gateway - second address
3. second to last address Google Cloud Future use
4. Broadcast - Last Address
