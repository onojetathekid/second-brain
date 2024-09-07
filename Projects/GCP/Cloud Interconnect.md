# ::: Cloud interconnect ::::

* Allows for On-premise to GCP VPC's
* Fast Low Latency connections High Availability
* Internal IP Address are accessible.. Private Google accessible
* Not over public internet
* Dedicated connections
* Self managed encryption over network
* Expensive (highest priced connection)

# :::: Dedicated Interconnect :::::::::
* Direct physical connection to google from on-premise
* Transfer large amounts of data
* Google Peering Edge to On-premise router at Colocation facility
* Attach a Vlan to Cloud router, cloud router creates a bgp session to on-premise
  bgp peer router. Custom dynamic routes
* Capacity - 10/100 Gbs ..
  - 10 Gbps x 8 = 80 Gbps Max
  - 100 Gbps x 2 = 200 Gbps Max
* Interconnect Connection facticity-  vendor provisions circuit from on-premise to google laptop
* Redundancy for sensitive apps. 2 connection to 2 separate edge availability domains is Recommended


# ::: Partner Interconnect :::
* Service Provider is in the middle and not a direct PTP connections
* 50 Mbps to 50 Gbps
# ::: Other Connection Types :::::::
* Direct Peering - direct connection from business to google edge network
* 100 location in 33 countries
* Free must meet google requirements

# ::::: CDN Interconnect :::::::::::::
Caching at Network edges

* Egress traffic vis Provider
# ::: When to use :::
Prevent traffic over Internet

































z
