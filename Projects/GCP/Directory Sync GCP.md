# Google Cloud Directory Sync
GCDS - Identity Sync Tool of on-premise AD

::::::::::::
Active Directory
  Authenticates and Authorized all users and computer in Windows Environment
  Sign and enforces security policies
  Updates software
  Stores information about members of the domain
    device, user group
    verifies credentials
  ADFS = Single sign on (Federation)
:::::::::::::
GCDS:
1 Way Sync as AD is single source of truth.

GSPS - Password sync from On-Prem. AD server to Google Domain. Installed on domain
        Controller. (change AD password to complete the sync with GSPS process)


:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::  Cloud IAM Best Practices :::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Least Privilege:
  Apply minimal access level required
  Predefined roles over primitive roles
  Grant roles at smallest scope
  Restrict who can create and manage service accounts
  Owner Roles gives full access

Resource Hierarchy:
  mirror your AD structure
  grant access at folder level
  Projects to group resources
  Grant IAM Rols Least Privilege
  Grant at Folder level.. for IAM roles

Service Accounts:
  S/A for each Application
  Don't delete active S/Aaccounts
  rotate user managed service account keys - creat new key, replace old key, delete old key.
  name service account keys - to know why it was created
  restrict service account access -
  Don't have keys in source - or in downloads... Not Safe..

  Auditing:
  Audit IAM Plociy log changes
  Who can Edite IAM policies
  Export logs to Cloud Storage
  Regularly Audit service account keys
  Restrict log access.

Policy Management:
  grant roles to groups
  multiple roles for a task, create a Google Group instead  

  ```
