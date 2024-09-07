# :::::: VPC Best Practices and Architectures :::::::::::

* Start with a Single VPC Network for resources with common requirements
  - Easiy to create maintain and understand
  - Group resources with commong requirements
  - Easier troubleshooting - less complex than multiple VPC's

* Auto mode is easy but custom mode VPC is best for production

* custom mode vpc allows more granularity, names, subnets

* Able to avoid overlapping ip's

* Google Cloud Reccmds. Group App of same type with Fewer managed networks but larger ip Ranges

# ::; Compliance ::
HIPPA
PCI-DSS
NIST
ISO 27001

* Isolate each of these into it's own vpc

# ::: Shared VPCs :::
User to Simplify Administration
Shared VPC to Service Projects
Delineates responsibilities for diff teams

Use Shared Service VPC:
Sharing of common resources -0
#### 3 Tier application architecture :::::::
* Presentation/Web Tier
* Application Tier
* Data Tier
** Each independent and run on separate servers
# Presentation
Front end, User interface & communication to the Application, display info to user in a web browser or web app
# Application
Middleware, core of the app, process data from presentation, can add, delete or modify Data
# Data
Backend, database

# :::: Scalability :::::
Each Tier is Scalable Vertical and horizontally
# ::: Faster Development ::::
Dev. simultaneously be multiple teams and not impact other tier,
# improved security
can connect internally to each Tier privately, External LB is only exposed to External
# performance
can process requests from cache, incoming load reduced via load balancers between tiers






























z
