# ::::::: Cloud VPN ::::::::::::::

Connect another network to Google Cloud:
* on-prem
* another cloud providr
* or another vpc

* Ipsec VPN Connection: (internet security protocol)

* Traffic over the connection, is encrypted by 1 VPN GW, Decrypted by the other

# Cloud VPN Details:
* Regional Service
  - Region goes down, connection is lost until region back online
  - Site to Site VPN. no site to "client" to pc or laptop
  - Private Google Access allows for on premise hosts connections
  - 3 Gbps per tunnel
  - Dynamic and Static routing, h-a setup requires Dynamic routing
  - IKEv1 and IKEv2 using shared Secret (Internet Key Exchange)


# ::::::::: 2 Types of Cloud VPN ::::::::
* Classic - SLA 99.9% - static and dynamic routing, 1 external IP
* HA VPN - 99.99% SLA -Dynamic routing only(BGP), 2 external IP 2 intfs. (Recommended by Google)

# ::::: Architecture ::::::::
Classic VPN - No Redundancy, Manually switch

HA VPN - Allows for Multiple tunnels,

# ::: When to use Cloud VPN :::
* High Speed Not Needed
* Need Public Internet
* No Peering available
* budget constraints, cloud interconnect is more expensive


































z
