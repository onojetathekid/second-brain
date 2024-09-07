## ExamPro - GCP VPC Peering
## :::::::::::::::::::::::::::::

* VPC Peering - private connectivity across 2 VPC Networks across the same or
 differen projects and orgs. Never traverse the public network.

* Reduces latency - all traffic inside google high speed network

* Increased network security - not exposed to public internet

* Reduces network costs - no egress cost from google... saving on traffic over public ip's
    keeping traffic inside google.

* Administratively separate.. each side is set up independently and can be tore down independently

* Exchange subnet routes

* Firewalls are required filter network across peered networks with ingress allow firwall rules
  * NO TRANSIT NETWOKS ALLOWED ONLY DIRECTLY CONNECTED VPC's
  * Tags and lables are not ALLOWED`
`








































z
