## ::: VPC Flow Logs :::::


# ::: Monitoring and Analyzing Traffic ::

* VPC Flow logs are enabled per subnet
* Exported to Cloud Logging (Stack-Driver) for 30 days export to storage for longer times
* Logs 1 of every 10 packets set by google.

* Network Monitoring
* Real-time visibility in to network throughput and performance
* Analyze network usage
* Network Forensics - when incidents happen to see IP to IP communications in/out
* Real-time security analysis - Stream to pub/sub and integrate with SIEM (Splunk)


# :::::: Record Format ::::::::
Core Fields - Base, Ip-Details, Metadata
    * Metadata can be omitted to save on storage costs

* Filter Logs before storage to reduce the storage cost and time to find info






























z
