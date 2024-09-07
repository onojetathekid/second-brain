
# :: Machine Types
* Families:
    - General-Purpose
    - Compute optimized
    - Memory optimized

* Naming:
e2-standard-32
Series: e2 (2 is the Generation)
Type: standard
vCPU's: 32
** GPU's- on for N2 Series

# General Purpose:
  - standard - most common, high mem, low cpu
  - high Memory - low cpu to high memory cpu ratio
  - high cpu - high cpu to low memory cpu Generation

* E2 Series - Day 2 Day computing at low cost, web serving, app serving, Back office
    micro services, development env.
      - 2-32 vCPU's
      - .5 - 128 Mem
      - lowest on demand pricing
      - custom available

* N1, N2, N2D series - balanced price / performance, web serving, app serving, med to large
    databases, cache and Media Streaming
    - N1 - first gen, 96 vCPUs and 624 GB of mem, 2-96 vCPUs, .95 - 324 memory,
    - N2 - second gen, 2-80 vCPU's / .5 - 640 Mem, extended mem feature
    - N2D - larges 2-224 vCPUs / .5-869 mem

# Compute optimized
  - Ultra high performance for compute-intensive workloads
  - Gaming
  - Electronic Design Automation (EDA)
  - predefined machine types
* C2 - Highest performance PER CORE / predefined only / not available custom
  - 4-60 vCPUs / 16-240 Mem
  - Caveat: no regional persistent disks
# Memory optimized
  - Ultra High-memory workloads
  - Large mem databases/ SAP HANA / in memory analytics

* M1 -
  - 40-160 vCPUs / 32-3844 Mem
* M2 -
  - 4-160 vCPU's / 32-11,776 Mem
  - data warehousing
  - in memory databases
  - in memory analytics