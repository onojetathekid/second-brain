POST https://compute.googleapis.com/compute/beta/projects/terraform-gcp-udemy-422416/regions/us-central1/healthChecks
{
  "checkIntervalSec": 5,
  "description": "",
  "healthyThreshold": 2,
  "logConfig": {
    "enable": false
  },
  "name": "friday-helthcheck",
  "region": "projects/terraform-gcp-udemy-422416/regions/us-central1",
  "tcpHealthCheck": {
    "port": 80,
    "proxyHeader": "NONE"
  },
  "timeoutSec": 5,
  "type": "TCP",
  "unhealthyThreshold": 2
}

POST https://compute.googleapis.com/compute/v1/projects/terraform-gcp-udemy-422416/zones/us-central1-c/instanceGroups/instance-group-friday-theo-may17/setNamedPorts
{
  "namedPorts": [
    {
      "name": "http",
      "port": 80
    }
  ]
}

POST https://compute.googleapis.com/compute/beta/projects/terraform-gcp-udemy-422416/regions/us-central1/backendServices
{
  "backends": [
    {
      "balancingMode": "UTILIZATION",
      "capacityScaler": 1,
      "group": "projects/terraform-gcp-udemy-422416/zones/us-central1-c/instanceGroups/instance-group-friday-theo-may17",
      "maxUtilization": 0.8
    }
  ],
  "connectionDraining": {
    "drainingTimeoutSec": 300
  },
  "description": "friday-theo-may17-backend",
  "enableCDN": false,
  "healthChecks": [
    "projects/terraform-gcp-udemy-422416/regions/us-central1/healthChecks/friday-helthcheck"
  ],
  "loadBalancingScheme": "EXTERNAL_MANAGED",
  "localityLbPolicy": "ROUND_ROBIN",
  "name": "friday-theo-may17-backend",
  "portName": "http",
  "protocol": "HTTP",
  "region": "projects/terraform-gcp-udemy-422416/regions/us-central1",
  "securityPolicy": "projects/terraform-gcp-udemy-422416/regions/us-central1/securityPolicies/default-security-policy-friday-theo-may17-backend",
  "sessionAffinity": "NONE",
  "timeoutSec": 30
}

POST https://compute.googleapis.com/compute/v1/projects/terraform-gcp-udemy-422416/regions/us-central1/backendServices/friday-theo-may17-backend/setSecurityPolicy
{
  "securityPolicy": "projects/terraform-gcp-udemy-422416/regions/us-central1/securityPolicies/default-security-policy-friday-theo-may17-backend"
}

POST https://compute.googleapis.com/compute/v1/projects/terraform-gcp-udemy-422416/regions/us-central1/urlMaps
{
  "defaultService": "projects/terraform-gcp-udemy-422416/regions/us-central1/backendServices/friday-theo-may17-backend",
  "name": "friday-theo-may17-lb",
  "region": "projects/terraform-gcp-udemy-422416/regions/us-central1"
}

POST https://compute.googleapis.com/compute/v1/projects/terraform-gcp-udemy-422416/regions/us-central1/targetHttpProxies
{
  "name": "friday-theo-may17-lb-target-proxy",
  "region": "projects/terraform-gcp-udemy-422416/regions/us-central1",
  "urlMap": "projects/terraform-gcp-udemy-422416/regions/us-central1/urlMaps/friday-theo-may17-lb"
}

POST https://compute.googleapis.com/compute/v1/projects/terraform-gcp-udemy-422416/regions/us-central1/forwardingRules
{
  "IPProtocol": "TCP",
  "loadBalancingScheme": "EXTERNAL_MANAGED",
  "name": "friday-front-end",
  "network": "projects/terraform-gcp-udemy-422416/global/networks/default",
  "networkTier": "STANDARD",
  "portRange": "80",
  "region": "projects/terraform-gcp-udemy-422416/regions/us-central1",
  "target": "projects/terraform-gcp-udemy-422416/regions/us-central1/targetHttpProxies/friday-theo-may17-lb-target-proxy"
}

POST https://compute.googleapis.com/compute/beta/projects/terraform-gcp-udemy-422416/regions/us-central1/securityPolicies
{
  "description": "Default security policy for: friday-theo-may17-backend",
  "name": "default-security-policy-friday-theo-may17-backend",
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
  "selfLink": "projects/terraform-gcp-udemy-422416/regions/us-central1/securityPolicies/default-security-policy-friday-theo-may17-backend",
  "type": ""
}
