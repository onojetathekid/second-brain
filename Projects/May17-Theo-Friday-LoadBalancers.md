```js

###################################################
:::::::::: Create a Basic VPC/Subnet ::::::::::::::

Create VPC Network
Name= accmod-vpc
Description= accmod VPC
MTU=default
  New Subnet= accmod-subnet1
  Subnet Description = accmod-subnet1
  Region = us-central1
  ipv4 range = 10.20.200.0/24
  Private Google Access = off
  Flow logs = off
  Hybrid Subnet - off
Firewall Rules = All on
  add rule via "Edit"
  uncheck, checked boxes
  other ipv4 ranges = 0.0.0.0/0
  Specified protocols and ports = TCP-checked / Ports=80
  confirm
Advanced Dynamic routing configuration = regional
create

::::::::: Create Instance Group :::::::::::::

compute engine instance group
create instance group button(blue)
name=instance group "friday-theo" #anyname
Description= "friday-theo"        #meaningful description
instance template default(or make template)
  *Create instance template*
  name = instance group template-1
  Location= regional
  Region = iowa Us-central1
  machine config = e2 /e2-medium
  VM provisioning model = standard
  Boot disk = debian 12 (bookworm)
  Firewall = Allow http traffic
  Advanced Options
    Networking
    Network Interfaces
    Edit network interface = accmod-vpc
  Management
    Automation = paste script2 startup script
    save and continue
Location = Single zone
  Region = us-central1
Autoscaling
    Autoscaling mode = on:add and remove instances to the group
    Minimum # instance = 3 Max = 10
    Auto scaling signals = default 60%
Autoscaling Scheduling = left alone, but can do
Initiation period = 60 secs
VM Instance life cycle default action on failure= repair instance
Auto healing: health check = load balanced vm auto healing check http
    -Auto Healing Create one if not available
    Create a Health check
      Name = accmod-healthcheck-1
      Description = accmod-healthcheck-1
      save
Initial delay = 300 seconds
updates during vm instance repair - keep same instant configuration
create

:::::::::::: Create Load Balancer :::::::::::::::::
Type of laod balancer = application load balaner (HTTP/HTTPS)
Next
public facing or internal = public
next
Global or single region deployment = regional
next
Configure
:::Create Regional external Application Load balancer::
Load Balancer name = accmod-lb01
Region = pre populated for me (us-central1)
Network = accmod-vpc
Reserve Subnet
Add a proxy-only subnet for this region and network
name = accmod-proxy-sub-1
Ip address range = 192.168.20.0/24
add
::Frontend configuration ::
New frontend ip and port
  name= accmod-frontend-01
  Done
:: Backend Configuration ::
create backend services
create a backend service
  name = accmod-backend-01
  description = accmod-backend-01
  Backend type = instance group
  Protocol=http / named port=http / timeout= 30 seconds
  New backend
  Instance Group (dropdown) = accmod-instance-group1
  Port numbers = 80
  :healthcheck:
    create health check
    name = accmod-lb-hc-1
    save
  create
  ok
  review and finalize
  create (creating load balancer)

  :::::::::::::::::::::::::::::::::::::::::::::::::::::
  ::::::::::::::Load Balanced Managed VMs::::::::::::

  deploy
  select project
  continue
  deployment_name = "load_balanced_vms"
  Labels = skipped
  Region = us-central1
  zone = us-central1-a
  Number of nodes = 2
  continue
  deploy #This will deploy 2 nodes
  

:::::::::::::: Rest ::::::::::::
::::: Equivalent Code Below:::::
::::::::::::::::::::::::::::::::

POST https://compute.googleapis.com/compute/beta/projects/tensile-thinker-416401/regions/us-central1/healthChecks
{
  "checkIntervalSec": 5,
  "description": "accmod-lb-hc-1",
  "healthyThreshold": 2,
  "logConfig": {
    "enable": false
  },
  "name": "accmod-lb-hc-1",
  "region": "projects/tensile-thinker-416401/regions/us-central1",
  "tcpHealthCheck": {
    "port": 80,
    "proxyHeader": "NONE"
  },
  "timeoutSec": 5,
  "type": "TCP",
  "unhealthyThreshold": 2
}

POST https://compute.googleapis.com/compute/v1/projects/tensile-thinker-416401/zones/us-central1-c/instanceGroups/accmod-instance-group1/setNamedPorts
{
  "namedPorts": [
    {
      "name": "http",
      "port": 80
    }
  ]
}

POST https://compute.googleapis.com/compute/beta/projects/tensile-thinker-416401/regions/us-central1/backendServices
{
  "backends": [
    {
      "balancingMode": "UTILIZATION",
      "capacityScaler": 1,
      "group": "projects/tensile-thinker-416401/zones/us-central1-c/instanceGroups/accmod-instance-group1",
      "maxUtilization": 0.8
    }
  ],
  "connectionDraining": {
    "drainingTimeoutSec": 300
  },
  "description": "accmod-backend-01",
  "enableCDN": false,
  "healthChecks": [
    "projects/tensile-thinker-416401/regions/us-central1/healthChecks/accmod-lb-hc-1"
  ],
  "loadBalancingScheme": "EXTERNAL_MANAGED",
  "localityLbPolicy": "ROUND_ROBIN",
  "name": "accmod-backend-01",
  "portName": "http",
  "protocol": "HTTP",
  "region": "projects/tensile-thinker-416401/regions/us-central1",
  "securityPolicy": "projects/tensile-thinker-416401/regions/us-central1/securityPolicies/default-security-policy-for-backend-service-accmod-backend-01",
  "sessionAffinity": "NONE",
  "timeoutSec": 30
}

POST https://compute.googleapis.com/compute/v1/projects/tensile-thinker-416401/regions/us-central1/backendServices/accmod-backend-01/setSecurityPolicy
{
  "securityPolicy": "projects/tensile-thinker-416401/regions/us-central1/securityPolicies/default-security-policy-for-backend-service-accmod-backend-01"
}

POST https://compute.googleapis.com/compute/v1/projects/tensile-thinker-416401/regions/us-central1/urlMaps
{
  "defaultService": "projects/tensile-thinker-416401/regions/us-central1/backendServices/accmod-backend-01",
  "name": "accmod-lb01",
  "region": "projects/tensile-thinker-416401/regions/us-central1"
}

POST https://compute.googleapis.com/compute/v1/projects/tensile-thinker-416401/regions/us-central1/targetHttpProxies
{
  "name": "accmod-lb01-target-proxy",
  "region": "projects/tensile-thinker-416401/regions/us-central1",
  "urlMap": "projects/tensile-thinker-416401/regions/us-central1/urlMaps/accmod-lb01"
}

POST https://compute.googleapis.com/compute/v1/projects/tensile-thinker-416401/regions/us-central1/forwardingRules
{
  "IPProtocol": "TCP",
  "loadBalancingScheme": "EXTERNAL_MANAGED",
  "name": "accmod-frontend-01",
  "network": "projects/tensile-thinker-416401/global/networks/accmod-vpc",
  "networkTier": "STANDARD",
  "portRange": "80",
  "region": "projects/tensile-thinker-416401/regions/us-central1",
  "target": "projects/tensile-thinker-416401/regions/us-central1/targetHttpProxies/accmod-lb01-target-proxy"
}

POST https://compute.googleapis.com/compute/beta/projects/tensile-thinker-416401/regions/us-central1/securityPolicies
{
  "description": "Default security policy for: accmod-backend-01",
  "name": "default-security-policy-for-backend-service-accmod-backend-01",
  "region": "us-central1",
  "rules": [
    {
      "action": "allow",
      "match": {
        "config": {
          "srcIpRanges": [
            "*"
          ]
        },
        "versionedExpr": "SRC_IPS_V1"
      },
      "priority": 2147483647
    },
    {
      "action": "throttle",
      "description": "Default rate limiting rule",
      "match": {
        "config": {
          "srcIpRanges": [
            "*"
          ]
        },
        "versionedExpr": "SRC_IPS_V1"
      },
      "priority": 2147483646,
      "rateLimitOptions": {
        "conformAction": "allow",
        "enforceOnKey": "IP",
        "exceedAction": "deny(403)",
        "rateLimitThreshold": {
          "count": 500,
          "intervalSec": 60
        }
      }
    }
  ],
  "selfLink": "projects/tensile-thinker-416401/regions/us-central1/securityPolicies/default-security-policy-for-backend-service-accmod-backend-01",
  "type": ""
}

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::: end of Equivalent code :::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::






::::::::::::::::::::::::::::::::::::::::::::::
:::::: Equivalent code ::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::
