# Routing and Private Google Access

Routes - define network traffic path from vm to other destinations. Inside the GCP Vpc
or to another vpc outside.

* Routing Table for VPC //vpc routes is a:
    - Single Destination (CIDR)
    - Single Next Hop

## 2-Types of routing in GCP

   * System-generated Route:
        - Default subnet routes
        - peering Routes
        - primary and secondary ip ranges get subnet Routes
        - no route can be more specific than a subnet route
        - applies to all instances in the VPC Network

   * Custom routes: by cloud routers
    * static
      - cannot match another subnet route
      - cannot be more specific than another subnet route
      - use next-hop feature
      - created manually
      - Cloud VPN tunnels, routes are created automatically for you.(will not route if tunnel is down)
      - load balancer ip can be used as the next hop address for TCP/UDP traffic (PBR)
        Parameters:
          Name
          Description
          Network*=default(or drop down)
          Dest. IP Range - receiving the incoming packets
          priority = highest priority is lowest number meaning 0 is highest
          Network tags
          Next-Hop= Default internet gateway
    * dynamic
      - managed by 1 or more Cloud routers
      - Destination ip range outside of the VPC Network
      - Next hops are always Bgp Peer address
      - VPNs and Interconnect

    * Special return paths
      - cannot delete or see them in routing tables
      - firewall rules can manipulate traffic

## ::::::::::::::::::::::::::::::::
## Private Google Access
## ::::::::::::::::::::::::::::::::

      - Internal ip can get to google API's and Services internally to google.
      - Private Google Access can be used to connect from on-prem, via cloud vpn tunnel or Cloud Interconnect to API's and serviced without external ip address
      - Private Google Access through a VPC Network peering connection called Private Services Access
      - connect from server less VPC access
