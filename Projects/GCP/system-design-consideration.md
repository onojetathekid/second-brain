  # System Design Consideration

## Designing for Reliability

Reliability is the most important feature of any application according to Google

* Must Have:
  meaureable reliability goals, and deviations must be promptly corrected
  architected for scalability, high availability, and automated change management
  self-healing where possible, and it must be instrumented for observability
  
  impose minimal manual work and cognitive load on operators, while ensuring rapid
  mitigation of failutes

### Best Practices to achieve reliability

Define your reliability goals using Service Level Objectives (SLOs)
Build observability into your infrastructure and applications
Design for scale and high availability
Build flexible and automated deployment capabilities
Build efficient alerting
Build a collaborative process for incident management

### SLIs, SLOs, SLAs

gain trust from your customers by getting them to trust your service

* Servive Level Indicator (SLI) - Something you measure

quantitative measure of some aspect of the level of service that is being provided
availability, latency, durability

* Service Level Objectives (SLO) - SLI + goal

specify a target level for the reliability of your service

* Service Level Agreement - SLO + penalties

explicit or implicit contract with your users that includes consequences of meeting 
or (missing) the SLOs they contain

will contain an SLO

a contract with your users

### Design Questions

are you measuring the user experience of application reliability?

Are the client applications designed to capture and report reliability metrics?

Is the system architecture designed with specific reliability and scalability goals
in mind?

### Error Bugets

use to manage development velocity

when the error buget is not yet consumed
  this give you the freedom to continue launching new features quickly

When the error buget is close to zero
  service changes should be frozen or slowed down
  invest in reliability features

* Design Questions

should you deploy this new feature?

what are the tradeoff between usage and reliability?

do you write code for reliability or build new feautures?

is this ready or does it needs more testing?

### Observability

Instrument your code to maximize observability

write log entries and trace entries > export monitoring metrics

Audit and prune your monitoring

* Design Questions

does the design review process have standards for observability that guide design 
reviews and code reviews?

are the metrics exported by the application adequate for troubleshooting outages?

are application log entries sufficiently detailed and relevant to be useful for debugging?

### Scale and High Availability

Multi-region architecture with failover

Elemininate scaslability bottlenecks

Degrade service levels gracefully

Periods of peak traffic events and plan for them

Conduct disaster recovery testing

* Design Questions

can the application scale up by adding more VMs, with no architectural changes?

is each component in the architecture horizontally scalable, through sharding or otherwise?

can the application handle failure of an entire cloud region without having a global
outage?

### Automated deployment capabilities

Support rollback
  firebase remote congif

Spread out the traffic

Implement rollouts using canary testing
Automated build, test and deploy using CI/CD

* Design question

is the automation designed to enable fast rollback, for every possible change?

for changes that cannot be rolled back, is there a design review process to ensure
forward and backward compatability between current and former binary versions and data
schemas?

are application log entries sufficiently detailed and releveant to be useful for 
debugging?

### Alerting

building efficient alerting

Optimize alerting delay
Alert on symptons not causes

### Incident Management Process

establish and regularly maintain an Incident Management Plan

* Mean Time To Detect (MTTD)
  a well tuned set of SLIs

* Mean Time To Mitigate (MTTM)
  Incident Management Plan

## Disaster Recovery (DR)

The process of resuming normal operations following a disaster

Formal document with detailed instructions on how to respond to unplanned incidents
  Natural disasters, power outages, cyber attacks
  Strategies on minimizing effects of a disaster
  Continue operations or quickly resume key operations

* Recovery Time Objective (RTO)

Maximum acceptable length of time that your application can be offline

* Recovery Point Objective

Maximum acceptable length of time during which data might be lost from your application
due to a major incident

### Disaster Recovery Patterns

* Cold
* Warm
* Hot

#### Cold Disaster Recovery Pattern

Cost low
Downtime will be substantial

#### Warm Disaster Recovery Pattern

Cost - balanced
Downtime - balanced

#### Hot Disaster Recovery Pattern

RTO - Recovery Time Objective
RPO - Recovery Point Objective

Cost - highest cost
Downtime - low

It is always recommended to create a detailed recovery plan - RTO and RPO values

Prepare your software for recovery

Apply the same security controls in DR as in production

Verify and test DR site

Train your users - ability to login

## Backup and Recovery

### Data and Database Backups

* Data Backups

Copying data from one place to another

Restore from corruption of data or if prod environments is down

* Database Backups

Recovery = backup + configuration + transaction logs

HA configuration recommended for smaller RTO and RPO

### Cloud Storage

gsutil -m cp -r
gsutil -m rsync -r

* Checksum validation

Content MD5 header - must match value
Cyclic Redundancy Check (CRC) header - crcmod module

* Object versioning

gsutil version set on gs://[BUCKET_NAME]

### Persistent disk on Compute Engine

snapshots can be taking from disks even while they're attached to current running
instances

snapshot 1 (full ssnapshot)

snapshot 2 - incremental
  blocks that are different than snapshot 1

snapshot 3 - incremental
  blocks that are different than snapshot 2

* Manually or Scheduled

### Cloud SQL

it is recommended that you enable automated backups and binary login

HA configuration and Cross Region replica






