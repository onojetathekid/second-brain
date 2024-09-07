#  Understand Jobs and CronJobs
#  Understand multi-contianer Pod design patterns - 1 or more containers on the same node
#   (sidecar, init, etc.)
    * Logging agents
    * Elastic Search - log stash
    * Init container - initialize pod's state
# Utilize persistent and ephemeral volumes
    * MySQL inside pod - create databases, tables, rows
    * Neo4j inside pod - create nodes, relationships
    * Web server logging to /mydata/mylogs - 2 containters - reading , writing

#:::::::::::::::::::::::::::::::::::::::::::::::::
## CDAD:     Application Deployment
# ::::::::::::::::::::::::::::::::::::::::::::::::::::::

# Use Kubernetes primitives to implement common deployment strategies (eg. blue-green, canary)
  * Blue-green: Current version, new version - cut over
  * Canary: 5% redirect to new version - slow migration by adding percent to new version
Understand Deployments and how to perform rolling updates
Use the Helm package manager to deploy existing packages
  * Download some files
  * Extract files into filesystem
  * Shortcuts - entry point
  * Configuration

- Helm Charts - deploying applications

# :::::::::::::::::::::::::::::::::::::::::::::
# : CKAD: Application Observability and Maint.
# :::::::::::::::::::::::::::::::::::::::::::::

* Understand API deprecations
* Implement probes and health checks
* User provided tools to monitor Kubernetes applications
* Utilize container logs
* Debugging in Kubernetes