### :::::::::: Shared VPC ::::::::::::::::

* Shared Across Projects to common VPC Network, they can talk across this Network
  with internal ip's to the VPC.

* Host Projects - Has 1 or more Shared VPC Networks

* Service Project - is any project attached to a Host Project by Shared VPC Admin

* VPC Cannot be Host and Service at the same time.. it has to be one or the other.

* service can only be attached to 1 host Project

* Standalone project is not on shared VPC

* Least Privilege's -
  - Shared VPC Admin - enable host projects, delegate access to some or all subnets, attach service projects to host projects
  - Service Project Admin: (for a Given project)
      - Project-level permissions -
      - Subnet-level permissions -

* External IP's only are for Host Project and cannot be given to Service Projects.








































z
