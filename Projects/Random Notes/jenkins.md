#Jenkins Server Instructions

1. Create VM instance
-name instance
-region
-e2 type

2. 	Boot disk
Select marketplace in blue letters
-Search for Jenkins in search bar
- Choose Jenkins solely. no other version

3. click blue button to activate
-Enable all settings if doing your first time.

4. all settings are default then click blue button at bottom DEPLOY
-Copy and paste admin and temporary password

example below:

Site address
http://34.16.21.8
 (ip changes)
Admin user
admin
Admin password (Temporary)
    r7-ZNZTX

Instance
jenkins-
Instance zone
me-west1-a
Instance machine type
e2-standard-2

5. Copy http: URL and then create a new tab and paste in search engine and click advanced and proceed if need to

6. Enter the admin and password in the Jenkins server tab you were in previously and use it to access the Jenkins dashboard

7. Select Configure a cloud
	-Select install a plugin

8. In the search bar look up:
	-GCP and select Pipeline: GCP Steps
Press install at the top right (blue button)
	-wait for download progress to say success

9. Click back to the top page

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
admin user: admin
admin password temp: RMWCi7z+
104.154.63.119 (ip changes on startup, new ip each time)
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::: Saturday 5/25/24 :::::::::::::
:: Post build to add bucket to store results ::
:::::::::::::::::::::::::::::::::::::::::::::::

post-build actions
google cloud storage plugins
google credentials = project Name
build log upload = build-log.txt
Storage location (bucket name from console)
    Create bucket if needed ok, to leave private.
    gs://demo-pca-bucket-1
Save

::::::::::::: Friday May 24, 2024 ::::::::::::::::::
From Jenkins server
Manage jenkins
:::::::: cloud creation ::::::::
go to clouds
new cloud (if NO New_Cloud option)
          Installed Plugins needed:
          google storage Plugin
          google compute engine Plugin
          google login plugin
          google Metadata plugin
          google auth Plugin
Name = "gcp2" #anything you want to name your clouds
Google compute Engine
create
New cloud
gcp2
Project id= deep-clock-425817-t0
service account Credentials = add
    jenkins
    Jenkins Credentials Provider Jendkins
    add Credentials
    Kind = google service account with private Key
    project name = deep-clock-425817-t0
    Jason key
    choose file = choose (jason) file of the project
    add
Service account Credentials = add the service account just created
Save
Instance configurations
General
Name-prefix = ubuntu-jenkins
Description = ubuntu-jenkins
Labels = ubuntu-jenkins
Launch timeout = 300
Run as user = Jenkins
Location:
    Region = us-central1
    zone = us-central1-a
save
::::: Pipeline ::::::::::::
          ::::: needed plugins ::::::::
          GCP Pipeline
          Pipeline: Step API	 Success
          Pipeline: GCP Steps	 Success
          :::::::::::::::::::::::::::::::::
Dashboard
New Item
Enter Item Name = test
Pipeline
ok
Description = test
Pipeline (no pipeline, need pipeline extension installed)
    try pipeline = hello world
save
build now
::::::::::::::Tools Update :::::::::::::::::
Dashboard
manage Jenkins
tools
Terraform installations
add Terraform
Name = Jenkins
install from bintray.com
Version = Terraform 40516 Linux (amd64)
apply
save


::::::::::::: Terraform Project ::::::::::::::
New Item
Enter Item Name = tf2
ok
Freestyle project
Description = tf2
check GitHub project
    project URL = repository URL of your GitHub
General:
    	-GitHub project
    	-Source code management - none
    	-Terraform installation
    	-update modules
    apply and save
    Build now
:::::::::::::::::::::::::::::::::::::::::::::::

    	-GitHub project
    	-Source code management - none
    	-
    	-Terraform installation
    managed Jenkins and select tools and scroll to the bottom for terraform installation if needed
    	-update modules
    apply and save
    Build now


 ::::::::::::::::::::::: Tuesday May 21,2024 :::::::::::::::::::
 -install a plugin
 11. look up GC
 GCloud SDK 	
 GCR Vulnerability Scanner
 Google Compute Engine
 Kubernetes
 Google Metadata
 Google Cloud Storage
 Google Kubernetes Engine
 Google Authenticated Source
 Google Analyze Code Security

  Press install after

 12. back to available plug ins and search git:
 GitHub API
 GitHub
 GitHub Branch Source
 Git server
 Git Parameter
 GitLab Authentication
 GitHub Integration
 Pipeline: GitHub
 Pipeline GitHub Notify Step
 GitHub Checks
 Git Push

 Click install

 13. available plugins and search OWASP:
 OWASP Markup Formatter
 OWASP Dependency-Check
 OWASP Dependency-Track
 ZAP Pipeline

 click install

 14. Back to available plug ins and search security:
 IBM Security AppScan Source Scanner
 IBM Security AppScan Standard Scanner
 MFA/Two-Factor-Authentication(2FA)Version
 HCL AppScan
 Extended Security Settings
 OpenID Connect Provider
 Aqua Security Scanner
 OpenShift Login
 SAML Single Sign On(SSO)
 Fortify
 Snyk Security
 Google Login
 Mask Passwords
 Authorize Project
 PAM Authentication

 click install

 14. back to available plug ins and search terraform:
 Terraform
 click install

 15. back to available plug ins and search azure:

 Azure SDK AP
 Azure Credentials
 Azure Key Vault

 click install


 17. Back to available plug ins and search docker:
 Docker
 Docker Commons
 Docker Pipeline
 Google Container Registry Auth
 Aqua MicroScanner
 CrowdStrike Security
 Panoptica Vulnerability Scanner

 click install


 18. available plugins seach sast:
 Sken.ai
 CodeThreat

 click install

 19. available plug ins dast:
 Breachlock DAST


 20. available plug ins search Veracode:
 Veracode Scan


 click install

 21.available plug ins search msbuild:
 MSBuild


 click install

 22. available plug ins search machine learning:
 Machine Learning

 click install

 23. go back to  top page.

 https://www.jenkins.io/doc/book/getting-started/






Structs	 Success
Credentials	 Success
Plain Credentials	 Success
JSON Api	 Success
Pipeline: Step API	 Success
Pipeline: GCP Steps	 Success
Loading plugin extensions	 Success
JavaBeans Activation Framework (JAF) API	 Success
JAXB	 Success
JavaMail API	 Success
Apache HttpComponents Client 4.x API	 Success
Oracle Java SE Development Kit Installer	 Success
SnakeYAML API	 Success
Jackson 2 API	 Success
OAuth Credentials	 Success
Google OAuth Credentials	 Success
bouncycastle API	 Success
Instance Identity	 Success
Mina SSHD API :: Common	 Success
Mina SSHD API :: Core	 Success
SSH server	 Success
Gson API	 Success
Trilead API	 Success
Caffeine API	 Success
Script Security	 Success
Command Agent Launcher	 Success
GCloud SDK	 Success
GCR Vulnerability Scanner	 Success
Loading plugin extensions	 Success
Variant	 Success
SSH Credentials	 Success
Credentials Binding	 Success
OkHttp	 Success
Kubernetes Client API	 Success
Authentication Tokens API	 Success
Kubernetes Credentials	 Success
ASM API	 Success
SCM API	 Success
Pipeline: API	 Success
Pipeline: Supporting APIs	 Success
Durable Task	 Success
Pipeline: Nodes and Processes	 Success
Ionicons API	 Success
Folders	 Success
Metrics	 Success
Kubernetes	 Success
Google Metadata	 Success
commons-lang3 v3.x Jenkins API	 Success
Google Cloud Storage	 Success
commons-text API	 Success
JSch dependency	 Success
Google Compute Engine	 Success
Plugin Utilities API	 Success
Font Awesome API	 Success
Bootstrap 5 API	 Success
JQuery3 API	 Success
ECharts API	 Success
Display URL API	 Success
Checks API	 Success
JUnit	 Success
Pipeline: SCM Step	 Success
Git client	 Success
Jakarta Activation API	 Success
Jakarta Mail API	 Success
Mailer	 Success
Git	 Success
JSON Path API	 Success
Google Kubernetes Engine	 Success
Google Authenticated Source	 Success
Google Analyze Code Security	 Success
Loading plugin extensions	 Success
GitHub API	 Success
Token Macro	 Success
GitHub	 Success
Java JSON Web Token (JJWT)	 Success
GitHub Branch Source	 Success
Git server	 Success
Git Parameter	 Success
Matrix Project	 Success
Pipeline: Groovy	 Success
Branch API	 Success
Pipeline: Job	 Success
Pipeline: Multibranch	 Success
GitHub Integration	 Success
GitHub Authentication	 Success
Pipeline: GitHub	 Success
Pipeline GitHub Notify Step	 Success
GitHub Checks	 Success
Git Push	 Success
Loading plugin extensions	 Success
OWASP Markup Formatter	 Success
OWASP Dependency-Check	 Success
OWASP Dependency-Track	 Success
ZAP Pipeline	 Success
Loading plugin extensions	 Success
PAM Authentication	 Success
Authorize Project	 Success
Mask Passwords	 Success
Google Login	 Success
Snyk Security	 Success
Pipeline: Basic Steps	 Success
Gradle	 Success
Fortify	 Success
Commons HttpClient 3.x API	 Success
SAML Single Sign On(SSO)	 Success
Matrix Authorization Strategy	 Success
OpenShift Login	 Success
Aqua Security Scanner	 Success
OpenID Connect Provider	 Success
Extended Security Settings	 Success
HCL AppScan	 Success
MFA/Two-Factor-Authentication(2FA)	 Success
IBM Security AppScan Standard Scanner	 Success
IBM Security AppScan Source Scanner	 Success
Loading plugin extensions	 Success
Terraform	 Success
Loading plugin extensions	 Success
Azure SDK API	 Success
Azure Credentials	 Success
Azure Key Vault	 Success
Loading plugin extensions	 Success
Cloud Statistics	 Success
Docker Commons	 Success
SSH Build Agents	 Success
Apache HttpComponents Client 5.x API	 Success
Docker API	 Success
Docker	 Success
Docker Commons	 Success
Pipeline: Stage Step	 Success
Joda Time API	 Success
Pipeline: Model API	 Success
Pipeline: Declarative Extension Points API	 Success
Pipeline: Groovy Libraries	 Success
Pipeline: Stage Tags Metadata	 Success
Pipeline: Input Step	 Success
Pipeline: Declarative	 Success
Docker Pipeline	 Success
Google Container Registry Auth	 Success
Aqua MicroScanner	 Success
CrowdStrike Security	 Success
Panoptica Vulnerability Scanner	 Success
Loading plugin extensions	 Success
Sken.ai CLI	 Success
CodeThreat	 Success
Loading plugin extensions	 Success
Breachlock DAST	 Success
Loading plugin extensions	 Success
Veracode Scan	 Success
Loading plugin extensions	 Success
MSBuild	 Success
Loading plugin extensions	 Success
Machine Learning	 Success
Loading plugin extensions	 Success
