## ::::: cloud NAT :::::::

# Cloud NAT Benefits
Security - reduce the need for each vm to have a public ip
Availability - 24/7
Scalability - Scale the number of nat ip pool
Performance - Andromida SDN , No choke points

# ::::: Cloud NAT :::::::::::::::::::::::
1. Relies on custom static routes, VPC Network needs a default route who's next hop is default internet gw.  
    Must have direct route to internet gw. No intermediate routes
2. compute.networkAdmin role is needed to create nat gateway on cloud router, reserve and assign nat ip address,
subnet and traffic to use NAT by NAT gateway.
3. No firewall rules are needed
4. VM's with a Public IP, cannot use NAT GW, those are sent to Default Internet GW

# ::: Configure :::::
Primary Secondary
Primary only in all subnets in the region
Custom subnet ip address ranges
External IP's Regionally
- Auto Allocate
- Manually assign

###### * Cloud NAT Never xlates traffic to Public Google API's/Services
#       Private Google Access is configured Automatically for private subnets configured
#       to use Cloud NAT GW.

* Cloud Nat GW

## ::: Cloud NAT w/ Bastion Host :::::::::::::::::::::::::::
# ::: logging to bastion :::::::
gcloud compute ssh bastion-host --zone us-east1-c
# ::: loggin into private ::::::::::
gcloud compute ssh private-instance-1 --zone us-east1-c --internal-ip

# ::: All Steps in Cloud NAT Lab :::::::::::::::::::::::::::::::
1. Bastion instance (iam, specific api's.. compute read write)
2. private instance
3. Create firewall rules
4. cloud shell, ssh to bastion, ssh to Private
5. create cloud NAT
6. repeat 4.
7. sudo apt-get update (works now)















z
