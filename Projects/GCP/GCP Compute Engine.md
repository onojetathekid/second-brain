# :::::: compute engine :::::


Virtal machin = instance (IaaS)

Multip instance sizes and typed

Per second billing

Launched in a vpc network

# Multi-tenant host or sole-tenant node
  - Multi-tenant Host - shared hardware but securely your own vm server and data is secure
  - Sole-tenant Node - you have your own machine not shared with any other tenant
  - Expensive for security or compliance requirements

# :::::: Machine Configuration ::::::::
* Cores(vCPU)Memory - Predefined / Custom
* OS - Public Image / Custom Image / Marketplace
* Storage - Standard (HDD) / Balanced (SSD) / SSD
* Networking - Default / Custom

* Machine Type - General, compute, memory, Intel or AMD
    - vCPU = single hardware hyper-thread on CPU
    - Network throughput = 2Gbps per vCPU
* Operating System - Image
    - Public image - Linux or windows / No Cost
    - Custom Image - Private Images (snapshot/existing disk) / No cost but has image storage Cost
    - Marketplace - OS + Software / all in one instance templates / easiest way
* Storage type
    - Performance vs Cost - Less pay/ low disk speed
  Standard - Spinning Hard Drive / least cost / highest Latency
  Balanced - Solid Stat Drive (alternative to SSD)
  SSD - Solid State Drive
  Local SSD - Physically attached (swap disk) / most Expensive / lowest Latency
* Networking - Auto, Default, custom networks
    - Many regions and Zones
    - ingress/egress firewall rules
    - network load balancing
    - Regional /global load balancing.






























z
